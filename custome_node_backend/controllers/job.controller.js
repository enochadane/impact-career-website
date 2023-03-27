const controller = {};
const Job = require("../models/Job");
const Candidate = require("../models/Candidate");
const { pinecone } = require("../db/pinecone");
const mongoose = require("mongoose");
require("dotenv").config();

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

    const index = pinecone.Index("candidates");

    const queryResponse = await index.query({
      queryRequest: {
        vector: embedding,
        topK: 1000,
        includeValues: true,
      },
    });

    const matches = queryResponse.matches.map((match) => ({
      id: match.id,
      score: match.score,
    }));

    const filteredMatches = matches.filter((match) => match.score >= 0.9);

    const job = await Job.create(req.body);

    filteredMatches.forEach(
      async (match) =>
        await Candidate.findByIdAndUpdate(match.id, {
          $push: { matches: [new mongoose.Types.ObjectId(job.id)] },
        })
    );

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
