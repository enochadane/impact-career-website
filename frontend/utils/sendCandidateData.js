import { ApolloClient, InMemoryCache } from '@apollo/client';
import { gql } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.BACKEND_URL,
  cache: new InMemoryCache(),
});

const sendCandidateData = async (candidateData) => {
  const candidateId = await getCandidate(candidateData.email);

  if (candidateId) {
    await updateCandidateData(candidateData, candidateId);
  } else {
    await createNewCandidate(candidateData);
  }
};

const updateCandidateData = async (data, id) => {
  const mutation = gql`
    mutation updateCandidate {
      updateCandidate(id: ${id}, data: { ${objectToString(data)}}) {
        data {
          id
          attributes {
            ${objectKeysToString(data)}
          }
        }
      }
    }  
  `;

  try {
    const response = await client.mutate({
      mutation: mutation,
    });
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

const createNewCandidate = async (data) => {
  const mutation = gql`
    mutation createCandidate {
      createCandidate(data: { ${objectToString(data)}}) {
        data {
          id
          attributes {
            ${objectKeysToString(data)}
          }
        }
      }
    }  
  `;

  try {
    const response = await client.mutate({
      mutation: mutation,
    });
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

const getCandidate = async (email) => {
  const query = gql`
      query {
        candidates(filters: {email: {eq: """${email}"""}}) {
          data {
            id
            attributes{
              email
            }
          }
        }
      }
  `;

  try {
    const response = await client.query({
      query: query,
    });

    return response?.data?.candidates?.data[0]?.id;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

const objectToString = (obj) => {
  let str = '';
  for (const key in obj) {
    str += `${key}: `;

    if (key == 'trending_jobs') {
      str += `["${obj[key]}"]`;
    } else if (typeof obj[key] === 'string') {
      str += `"${obj[key]}"`;
    } else {
      str += `${obj[key]}`;
    }
    str += ' ';
  }
  return str;
};

function objectKeysToString(obj) {
  const temp = obj;
  delete temp.trending_jobs;

  return Object.keys(temp).join(' ');
}

export default sendCandidateData;
