const controller = {};
const Candidate = require("../models/Candidate");
const Job = require("../models/Job");
const { pinecone } = require("../db/pinecone");
require("dotenv").config();
const generateEmbedding = require("../util/generateEmbedding");
const bcrypt = require("bcrypt");

const SALT_ROUND = 10;

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
    )} .
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
    };

    const upsertResponse = await index.upsert({ upsertRequest });
    console.log("pine: ", upsertResponse);
    res.json(response);
  } catch (err) {
    console.log(err);
    res.status(500);
  }
};

controller.signUp = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    const exists = await Candidate.findOne({ email });

    if (exists) {
      return res
        .status(400)
        .json({ message: "Email already exists", payload: req.body });
    }

    const hash = bcrypt.hashSync(password, SALT_ROUND);

    let candidate;

    if (!exists) {
      candidate = await Candidate.create({ ...req.body, password: hash });
    } else {
      candidate = await Candidate.findByIdAndUpdate(exists._id, {
        ...req.body,
        password: hash,
      });
    }

    delete candidate._doc.password;

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

module.exports = controller;
