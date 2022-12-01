import nodemailer from "nodemailer";

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass,
  },
});

export const mailOptions = {
  from: email,
  to: email,
  subject: "Custom attachment",
  attachments: [
    {
      raw: `Content-Type: text/plain
Content-Disposition: attachment

Attached text file`,
    },
  ],
};
