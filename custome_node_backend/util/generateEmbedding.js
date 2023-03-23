const axios = require("axios");
require("dotenv").config();

const generateEmbedding = async (input) => {
  try {
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

    return embedding;
  } catch (err) {
    console.log(err);
    return null;
  }
};

module.exports = generateEmbedding;
