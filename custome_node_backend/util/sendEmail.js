const nodemailer = require("nodemailer");
const deleteFile = require("../util/deleteFile");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  port: 465,
  host: "smtp.gmail.com",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
  secure: true,
});

const sendEmail = ({ to, subject, html, attachments }) => {
  let pdfPath;
  if (attachments) {
    pdfPath = attachments[0].path;
  }

  const mailData = {
    from: "yourimpactcareers@gmail.com",
    to,
    subject,
    html,
    attachments,
  };

  if (attachments) {
    mailData.attachments = attachments;
  }

  transporter.sendMail(mailData, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      // console.log(info);
      deleteFile(pdfPath);
    }
  });
};

module.exports = sendEmail;
