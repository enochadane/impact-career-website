import {
  GET_INDIVIDUAL_JOBS_POST,
  GET_ALL_JOBS_SLUGS,
} from '../../graphql/queries';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import nodemailer from 'nodemailer';
import 'dotenv/config';
export const config = {
  api: {
    bodyParser: {
      sizeLimit: '3mb',
    },
  },
};
const client = new ApolloClient({
  uri: process.env.BACKEND_URL,
  cache: new InMemoryCache(),
});
export default function (req, res, post) {
  console.log('KAMAL', post);
  const {
    subject,
    First_Name,
    Last_Name,
    email,
    Mobile_Number,
    Your_Location,
    Current_Salary,
    LinkedIn_URL,
    Resume_Upload,
    Resume_title,
  } = req.body;

  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: process.env.username,
      pass: process.env.email_password,
    },
    secure: true,
  });
  const mailData = {
    from: 'yourimpactcareers@gmail.com',
    to: 'yourimpactcareers@gmail.com',
    subject: `${subject} of open job`,
    text: req.body.message + ' | Sent from: ' + req.body.email,
    html: `<p>Contact Form Submission Details</p><br>
    <p><strong>First Name: </strong> ${First_Name}</p>
    <p><strong>Last Name: </strong> ${Last_Name}</p>
    <p><strong>Email: </strong> ${email}</p>
    <p><strong>Mobile Number: </strong> ${Mobile_Number}</p>
    <p><strong>Your Location: </strong> ${Your_Location}</p>
    <p><strong>Current Salary: </strong> ${Current_Salary}</p>
    <p><strong>LinkedIn URL: </strong> ${LinkedIn_URL}</p>
    <p><strong>Resume Upload: </strong> ${Resume_title}</p>`,
  };

  if (Resume_Upload && Resume_title) {
    mailData.attachments = {
      filename: Resume_title,
      path: Resume_Upload,
    };
  }

  transporter.sendMail(mailData, function (err, info) {
    if (err) {
      console.log(err);
      res.status(500).json({
        success: false,
        message: 'Something went wrong',
      });
    } else {
      console.log(info);
      res.status(200).json({
        success: true,
        message: 'Mail successfully sent',
      });
    }
  });
}

export async function getStaticPaths() {
  const { data } = await client.query({ query: GET_ALL_JOBS_SLUGS });

  const paths = data.trendingJobs.data.map((post) => {
    return {
      params: {
        slug: post.attributes.urlSlug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const { data } = await client.query({
    query: GET_INDIVIDUAL_JOBS_POST,
    variables: { slugUrl: params.slug },
  });

  const attrs = data.trendingJobs.data[0].attributes;

  return {
    props: {
      post: {
        title: attrs.title,
        jobsName: attrs.jobsName,
        jobsLocation: attrs.jobsLocation,
        jobsPrice: attrs.jobsPrice,
        content: attrs.content,
        image: attrs.image,
      },
    },
  };
}
