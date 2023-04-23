const controller = {};
const Job = require("../models/Job");
const Candidate = require("../models/Candidate");
const { pinecone } = require("../db/pinecone");
const mongoose = require("mongoose");
require("dotenv").config();
const axios = require("axios");
const generateResume = require("../util/generateResume");
const formatJobDescription = require("../util/formatJobDescription");
const sendMail = require("../util/sendEmail");

const generateEmbedding = require("../util/generateEmbedding");
const generatePDF = require("../util/generatePDF");
const emailFooter = require("../util/emailFooter");

controller.add = async (req, res) => {
  try {
    const { title, companyName, salary, location, url, description } = req.body;

    const input = `
      Job title "${title}"
      Location "${location}"
      Job description: ${description}
    `;

    const embedding = await generateEmbedding(input);

    const queryResponse = await axios({
      method: "POST",
      url: "https://candidates-445236f.svc.us-central1-gcp.pinecone.io/query",
      headers: {
        "Api-Key": process.env.PINECONE_KEY,
        "Content-Type": "application/json",
      },
      data: {
        vector: embedding,
        topK: 100,
        includeValues: false,
        namespace: "users",
      },
    });

    const matches = queryResponse.data.matches.map((match) => ({
      id: match.id,
      score: match.score,
    }));

    const filteredMatches = matches.filter((match) => match.score >= 0.9);

    const job = await Job.create(req.body);
    const recordId = job._id;

    const index = pinecone.Index("candidates");

    const upsertRequest = {
      vectors: [
        {
          id: recordId,
          values: embedding,
        },
      ],
      namespace: "jobs",
    };

    const upsertResponse = await index.upsert({ upsertRequest });

    filteredMatches.forEach(async (match) => {
      const candidate = await Candidate.findByIdAndUpdate(match.id, {
        $push: { matches: [new mongoose.Types.ObjectId(job.id)] },
      }).select(
        "firstName lastName email skills workHistory certifications education country idealJobDescription phone yearsOfExperience doNotDisturb"
      );

      if (!candidate.doNotDisturb) {
        const resume = await generateResume(candidate, input);

        const pdfPath = await generatePDF(resume);

        const formattedJobDescription = await formatJobDescription(job);

        const resubscribeLink = `${process.env.SERVER}/example/candidate/resubscribe/${candidate._id}`;
        const unsubscribeLink = `${process.env.SERVER}/example/candidate/unsubscribe/${candidate._id}`;

        const emailConfig = {
          to: candidate.email,
          subject: "You are in luck! We've found your next job opportunity",
          html:
            formattedJobDescription +
            emailFooter(url, resubscribeLink, unsubscribeLink),
          attachments: [
            {
              filename: "resume.pdf",
              path: pdfPath,
              contentType: "application/pdf",
            },
          ],
        };

        await sendMail(emailConfig);
      }
    });

    res.json(filteredMatches);
  } catch (err) {
    console.log(err);
    res.status(500);
  }
};

controller.remove = async (req, res) => {
  try {
    const id = req.params;

    res.status(200).json({ id: id });
  } catch (err) {
    console.log(err);
    res.status(500);
  }
};

controller.getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find();

    res.status(200).json(jobs);
  } catch (err) {
    console.log(err);
    res.status(500);
  }
};

controller.getJobsByPage = async (req, res) => {
  try {
    const page = parseInt(req.params.page);
    const skip = (page - 1) * 10;

    const jobs = await Job.find().skip(skip).limit(10);

    res.json({ jobs });
  } catch (err) {
    console.log(err);
    res.status(500);
  }
};

controller.getFilteredJobs = async (req, res) => {
  try {
    const searchKey = req.params.search;

    const jobs = await Job.find({
      $or: [
        { title: { $regex: searchKey, $options: "i" } },
        { companyName: { $regex: searchKey, $options: "i" } },
        { location: { $regex: searchKey, $options: "i" } },
        { description: { $regex: searchKey, $options: "i" } },
      ],
    });

    res.json({ jobs });
  } catch (err) {
    console.log(err);
    res.status(500);
  }
};

controller.getTotalJobs = async (req, res) => {
  try {
    const count = await Job.countDocuments();
    res.json({ count });
  } catch (err) {
    console.log(err);
    res.status(500);
  }
};

module.exports = controller;
