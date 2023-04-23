const controller = {};
const Candidate = require("../models/Candidate");
const Job = require("../models/Job");
const { pinecone } = require("../db/pinecone");
require("dotenv").config();
const generateEmbedding = require("../util/generateEmbedding");
const axios = require("axios");
var crypto = require("crypto");
const MagicLinkEmailBody = require("../email_copy/candidate/MagicLink");
const sendEmail = require("../util/sendEmail");

controller.addProfile = async (req, res) => {
  try {
    const userProfile = req.body;

    const id = userProfile.id;
    delete userProfile.id;
    const response = await Candidate.findByIdAndUpdate(id, userProfile);
    const recordId = response._id;

    const input = `
    skills ${userProfile.skills}
    years of experience ${userProfile.yearsOfExperience}
    country ${userProfile.country}
    ${userProfile.workHistory.map(
      (work) => "Worked as " + work.position + ". " + work.description
    )}.
    ${userProfile.certifications.map(
      (certificate) => "Certificate of " + certificate.name
    )}.
    ${userProfile.education.map((edu) => "Studied " + edu.degree)} .
    Ideal job description ${userProfile.idealJobDescription}
    `;

    const embedding = await generateEmbedding(input);

    const index = pinecone.Index("candidates");

    const upsertRequest = {
      vectors: [
        {
          id: recordId,
          values: embedding,
        },
      ],
      namespace: "users",
    };

    const upsertResponse = await index.upsert({ upsertRequest });

    const queryResponse = await axios({
      method: "POST",
      url: "https://candidates-445236f.svc.us-central1-gcp.pinecone.io/query",
      headers: {
        "Api-Key": process.env.PINECONE_KEY,
        "Content-Type": "application/json",
      },
      data: {
        vector: embedding,
        topK: 1000,
        includeValues: false,
        namespace: "jobs",
      },
    });

    const matches = queryResponse.data.matches;
    let filteredMatch = [];

    let existingMatches = response.matches.map((match) => match.toString());

    if (matches) {
      filteredMatch = matches
        .filter((obj) => obj.score > 0.83 && !existingMatches.includes(obj.id))
        .map(({ id, score }) => ({ id, score }));
    }

    filteredMatch = [
      ...filteredMatch,
      ...existingMatches.map((m) => ({ id: m })),
    ];

    const filteredMatchJobs = [];

    for (let i = 0; i < filteredMatch.length; i++) {
      const jobDetail = await Job.findById(filteredMatch[i].id);
      if (jobDetail) {
        filteredMatchJobs.push(jobDetail);
      }
    }

    console.log("pine: ", upsertResponse);
    res.json(filteredMatchJobs);

    await Candidate.findByIdAndUpdate(id, {
      matches: filteredMatch.map((match) => match.id),
    });
  } catch (err) {
    console.log(err);
    res.status(500);
  }
};

controller.signUp = async (req, res) => {
  try {
    const { firstName, lastName, email } = req.body;

    const exists = await Candidate.findOne({ email });

    if (exists) {
      return res
        .status(400)
        .json({ message: "Email already exists", payload: req.body });
    }

    let candidate;

    if (!exists) {
      candidate = await Candidate.create({ ...req.body });
    } else {
      candidate = await Candidate.findByIdAndUpdate(exists._id, {
        ...req.body,
      });
    }

    res.status(200).json(candidate);
  } catch (error) {
    // errorResponse(res);
    console.log(error);
  }
};

controller.signIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    const candidate = await Candidate.findOne({ email })
      .populate({
        path: "matches",
        model: Job,
      })
      .exec();
    let auth;
    if (candidate) {
      auth = await bcrypt.compare(password, candidate?.password);
    }
    if (!candidate) {
      res.status(401).json({ message: "User does not exist" });
    } else if (auth) {
      res.status(200).json({
        message: "correct authentication",
        user: {
          _id: candidate._id,
          firstName: candidate.firstName,
          lastName: candidate.lastName,
          email: candidate.email,
          skills: candidate.skills,
          workHistory: candidate.workHistory,
          certifications: candidate.certifications,
          education: candidate.education,
          country: candidate.country,
          idealJobDescription: candidate.idealJobDescription,
          phone: candidate.phone,
          yearsOfExperience: candidate.yearsOfExperience,
          matches: candidate.matches,
        },
      });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    // errorResponse(res);
    console.log(error);
  }
};

controller.magicLogin = async (req, res) => {
  try {
    const { email, magicId } = req.body;

    let user;

    if (email && magicId) {
      user = await Candidate.findOne({ email })
        .populate({
          path: "matches",
          model: Job,
        })
        .exec();
    } else {
      res.status(404).send("Resource not found");
    }

    if (
      user.magicLinkActive == true &&
      magicId == user.magicId &&
      user.magicLinkExpiration > new Date()
    ) {
      res.status(200).json({
        message: "correct authentication",
        user: {
          _id: user._id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          skills: user.skills,
          workHistory: user.workHistory,
          certifications: user.certifications,
          education: user.education,
          country: user.country,
          idealJobDescription: user.idealJobDescription,
          phone: user.phone,
          yearsOfExperience: user.yearsOfExperience,
          matches: user.matches,
        },
      });
    } else {
      res.json({ authorized: false });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("server error");
  }
};

controller.magicLink = async (req, res) => {
  try {
    const { email } = req.body;

    let user;
    let emailBody;
    const magicId = crypto.randomBytes(20).toString("hex");
    const magicLinkExpiration = new Date();
    magicLinkExpiration.setHours(magicLinkExpiration.getHours() + 1);

    const magicLinkActive = true;

    const kk = email;
    if (email) {
      user = await Candidate.findOne({ email });
    } else {
      res.status(404).send("Resource not found.");
    }

    if (!user) {
      res.status(404).send("Resource not found");
    } else {
      emailBody = MagicLinkEmailBody(user, magicId);
    }

    const emailConfig = {
      to: user.email,
      subject: "Log in to Impactcareers",
      html: emailBody,
    };

    await sendEmail(emailConfig);

    await Candidate.findByIdAndUpdate(user._id, {
      magicId,
      magicLinkExpiration,
      magicLinkActive,
    });

    res.status(200).send("magic link sent");
  } catch (error) {
    console.log(error);
    res.status(500);
  }
};

controller.updateWorkHistory = async (req, res) => {
  try {
    const userId = req.params.userId;

    const workHistory = req.body;
    const response = await Candidate.findByIdAndUpdate(userId, { workHistory });

    res.status(200).json(response);
  } catch (error) {
    // errorResponse(res);
    console.log(error);
  }
};

controller.updateCertifications = async (req, res) => {
  try {
    const userId = req.params.userId;

    const certifications = req.body;
    const response = await Candidate.findByIdAndUpdate(userId, {
      certifications,
    });

    res.status(200).json(response);
  } catch (error) {
    // errorResponse(res);
    console.log(error);
  }
};

controller.updateEducation = async (req, res) => {
  try {
    const userId = req.params.userId;

    const education = req.body;
    const response = await Candidate.findByIdAndUpdate(userId, { education });

    res.status(200).json(response);
  } catch (error) {
    // errorResponse(res);
    console.log(error);
  }
};

controller.unsubscribe = async (req, res) => {
  try {
    const userId = req.params.userId;

    const response = await Candidate.findByIdAndUpdate(userId, {
      doNotDisturb: true,
      unsubscribedAt: new Date(),
    });

    res.redirect(process.env.HOME_PAGE + "/unsubscribe");
  } catch (error) {
    // errorResponse(res);
    console.log(error);
  }
};

controller.resubscribe = async (req, res) => {
  try {
    const userId = req.params.userId;

    const response = await Candidate.findByIdAndUpdate(userId, {
      doNotDisturb: false,
    });

    res.redirect(process.env.HOME_PAGE + "/subscribe");
  } catch (error) {
    // errorResponse(res);
    console.log(error);
  }
};

controller.updateVisitedJobs = async (req, res) => {
  try {
    const { userId, jobId } = req.body;

    const candidate = await Candidate.findByIdAndUpdate(userId, {
      $push: { visited: jobId },
    });

    if (candidate) {
      res.status(200).json(candidate);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    // errorResponse(res);
    console.log(error);
  }
};

module.exports = controller;
