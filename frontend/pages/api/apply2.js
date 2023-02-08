import nodemailer from 'nodemailer';
import 'dotenv/config';
export const config = {
  api: {
    bodyParser: {
      sizeLimit: '3mb',
    },
  },
};
export default function (req, res) {
  const {
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
      pass: process.env.password,
    },
    secure: true,
  });
  const mailData = {
    from: 'yourimpactcareers@gmail.com',
    to: 'yourimpactcareers@gmail.com',
    subject: `Request access form submitted`,
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
