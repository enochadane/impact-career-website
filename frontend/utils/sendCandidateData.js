import { ApolloClient, InMemoryCache } from '@apollo/client';
import { gql } from '@apollo/client';

const sendCandidateData = async (candidateData) => {
  const mutation = gql`
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

  const client = new ApolloClient({
    uri: process.env.BACKEND_URL,
    cache: new InMemoryCache(),
  });

  const response = await client.mutate({
    mutation: mutation,
  });
};

export default sendCandidateData;
