const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();

const generateResume = async (candidateProfile, jobDescription) => {
  try {
    const configuration = new Configuration({
      apiKey: process.env.OPEN_AI_KEY,
    });
    const openai = new OpenAIApi(configuration);

    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are an advanced AI that generates resume for a candidate profile that is tailored for a specific job description. You only return the resume and don't include any more details. The resume generated is of a very high quality and will help the candidate land the job.",
        },
        {
          role: "user",
          content: `Candidate profile: ${candidateProfile} Job description: ${jobDescription}`,
        },
      ],
    });

    console.log("com: ", completion.data.choices);
  } catch (err) {
    console.log(err);
  }
};

module.exports = generateResume;
