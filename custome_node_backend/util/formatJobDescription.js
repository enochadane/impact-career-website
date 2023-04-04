const chatCompletion = require("../util/chatCompletion");

const formatJobDescription = async (job) => {
  try {
    const chatConfig = {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `You are an advanced AI that formate a given job description directly from the database
                    in to  html format. The html formate will have a maximum width of 800 pixel and a gray border with rounded corners.
                    The job description is going to be sent to a candidate via email and should have a typical resume theme and must
                    be good looking and easy for the candidate to review.        
                    `,
        },
        {
          role: "user",
          content: `Job: ${job}`,
        },
      ],
    };

    const response = await chatCompletion(chatConfig);

    return response;
  } catch (error) {
    console.log(error);
  }
};

module.exports = formatJobDescription;
