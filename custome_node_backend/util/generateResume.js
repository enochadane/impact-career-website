const chatCompletion = require("../util/chatCompletion");

require("dotenv").config();

const generateResume = async (candidateProfile, jobDescription) => {
  try {
    const chatConfig = {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `You are an advanced AI that generates resume for a candidate profile that is tailored 
                    for a specific job description. 
                    The candidate profile is going to be given directly from the database record and going to be in a object format.
                    You only return the resume and don't include any more details. 
                    The resume will contain an objective. The resume does not include the Ideal Job description.
                    The resume generated is of a very high quality and will help the candidate land the job. 
                    The response will be html formatted and the resume will have a maximum width of 800 pixels with a gray border and curved edges.
                    The header container text are centered to be in the middle. 
                    The resume is in first person as if the candidate wrote it him self.
                    The other sections will have the title (section name) on the top and the description below.
                    You don't use any horizontal dividers.
                    The resume will include a header with the name and contact information of the candidate, a professional 
                    summary that briefly highlights the skills, experiences and accomplishments of the candidate, 
                    an objective to explain the type of job the candidate is seeking and hope to accomplish in that position.
                    work experience to give a brief description of the responsibilities and achievements in each role and dates of employment,
                    an education section should include the highest level of education, the degree obtained and date of attendance,
                    section to show case skills of the candidate.
                    The resume will not be reviewed so should not have any place holders to be filled by the candidate.
                    `,
        },
        {
          role: "user",
          content: `Candidate profile: ${candidateProfile} Job description: ${jobDescription}`,
        },
      ],
    };

    const response = await chatCompletion(chatConfig);

    return response;
  } catch (err) {
    console.log(err);
    return null;
  }
};

module.exports = generateResume;
