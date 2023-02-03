import axios from 'axios';

const sendCandidateData = async (candidateData) => {
  const mutation = `
      mutation {createCandidate(data: {
        firstName: """${candidateData.firstName}"""
        lastName: """${candidateData.lastName}"""
        email: """${candidateData.email}"""
        phoneNumber: """${candidateData.phone ? candidateData.phone : ''}"""
        linkedIn: """${
          candidateData.linkedInUrl ? candidateData.linkedInUrl : ''
        }"""
        notifyForSimilarJobs: ${candidateData.notifyForSimilarJobs}
        countryPreference: """${
          candidateData.countryPreference ? candidateData.countryPreference : ''
        }"""
        cityPreference: """${
          candidateData.cityPreference ? candidateData.cityPreference : ''
        }"""
        trending_jobs: ["${candidateData.jobId}"]
      }){
        data {
          attributes {
            firstName
            lastName
            email
            phoneNumber
            linkedIn
            notifyForSimilarJobs
            countryPreference
            cityPreference
          }
        }
      }}
      `;

  try {
    const response = await axios({
      url: process.env.BACKEND_URL,
      method: 'post',
      data: {
        query: mutation,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

export default sendCandidateData;
