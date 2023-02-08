import { ApolloClient, InMemoryCache } from '@apollo/client';
import { gql } from '@apollo/client';
import { objectToString, objectKeysToString } from './util';

const client = new ApolloClient({
  uri: process.env.BACKEND_URL,
  cache: new InMemoryCache(),
});

const sendEmployerData = async (employerData) => {
  const employerId = await getEmployer(employerData.email);

  if (employerId) {
    await updateEmployerData(employerData, employerId);
  } else {
    await createNewEmployer(employerData);
  }
};

const updateEmployerData = async (data, id) => {
  const mutation = gql`
    mutation updateEmployer {
      updateEmployer(id: ${id}, data: { ${objectToString(data)}}) {
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

const createNewEmployer = async (data) => {
  const mutation = gql`
    mutation createEmployer {
      createEmployer(data: { ${objectToString(data)}}) {
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

    console.log('ressss: ', response);
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

const getEmployer = async (email) => {
  const query = gql`
      query {
        employers(filters: {email: {eq: """${email}"""}}) {
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

    return response?.data?.employers?.data[0]?.id;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

export default sendEmployerData;
