import axios from 'axios';

const sendEmail = (userData, type) => {
  const { fistName: First_Name, lastName: Last_Name, email } = userData;

  const emailData = { First_Name, Last_Name, email };

  const formData = new FormData();

  let endPointAddress = '';

  if (type === 'resource_request') {
    endPointAddress = 'api/apply2';
  } else if (type === 'candidate_seeking_opportunity') {
    endPointAddress = 'api/apply';
  } else if (type === 'employer_job_post') {
    endPointAddress = 'api/apply1';
  }

  Object.entries(emailData).forEach(([key, value]) => {
    formData.append(key, value);
  });

  try {
    axios.post(endPointAddress, formData, {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: formData,
    });
  } catch (error) {
    console.log(error);
  }
};

export default sendEmail;
