const controller = {};
const Job = require("../models/Job");
const Candidate = require("../models/Candidate");
const { pinecone } = require("../db/pinecone");
const mongoose = require("mongoose");
require("dotenv").config();
const axios = require("axios");
const generateResume = require("../util/generateResume");

const generateEmbedding = require("../util/generateEmbedding");

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
        topK: 1000,
        includeValues: true,
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
      });

      const candidateProfile = `
      Name ${candidate.firstName} ${candidate.lastName}
      email ${candidate.email}

      skills ${candidate.skills}
      years of experience ${candidate.yearsOfExperience}
      country ${candidate.country}
      ${candidate.workHistory.map(
        (work) => "Worked as " + work.position + ". " + work.description
      )}.
      ${candidate.certifications.map(
        (certificate) => "Certificate of " + certificate.name
      )}.
      ${candidate.education.map((edu) => "Studied " + edu.degree)} .
      Ideal job description ${candidate.idealJobDescription}
      `;

      await generateResume(candidateProfile, input);
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

module.exports = controller;
