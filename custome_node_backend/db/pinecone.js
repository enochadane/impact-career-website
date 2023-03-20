const { PineconeClient } = require("@pinecone-database/pinecone");
require("dotenv").config();

const pinecone = new PineconeClient();
const apiKey = process.env.PINECONE_KEY;

const connectPinecone = async () => {
  try {
    await pinecone.init({
      environment: "us-central1-gcp",
      apiKey,
    });
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = { connectPinecone, pinecone };
