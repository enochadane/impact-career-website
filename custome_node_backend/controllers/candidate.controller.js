const controller = {};
const Candidate = require("../models/Candidates");
const axios = require("axios");
const { pinecone } = require("../db/pinecone");
require("dotenv").config();

controller.addProfile = async (req, res) => {
  try {
    const userProfile = req.body;

    const candidate = new Candidate(userProfile);
    const response = await candidate.save();
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

    const embeddingConfig = {
      method: "POST",
      url: "https://api.openai.com/v1/embeddings",
      headers: {
        Authorization: `Bearer ${process.env.OPEN_AI_KEY}`,
      },
      data: {
        input,
        model: "text-embedding-ada-002",
      },
    };

    const openAIResponse = await axios(embeddingConfig);
    const embedding = openAIResponse.data.data[0].embedding;
    console.log(embedding);
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

module.exports = controller;
