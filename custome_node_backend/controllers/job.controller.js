const controller = {};
const { pinecone } = require("../db/pinecone");
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
        topK: 20,
        includeValues: true,
      },
    });

    const matches = queryResponse.matches.map((match) => ({
      id: match.id,
      sore: match.score,
    }));

    res.json(matches);
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
