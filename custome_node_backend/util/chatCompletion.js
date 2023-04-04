const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();

const configuration = new Configuration({
  apiKey: process.env.OPEN_AI_KEY,
});

const chatCompletion = async (chatConfig) => {
  try {
    const openai = new OpenAIApi(configuration);

    const completion = await openai.createChatCompletion(chatConfig);

    return completion.data?.choices[0]?.message?.content;
  } catch (err) {
    console.log(err);
    return null;
  }
};

module.exports = chatCompletion;
