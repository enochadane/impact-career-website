export default function (req, res) {
  require('dotenv').config();

  const {
    First_Name,
    Last_Name,
    email,
    Phone,
    Title,
    Organization,
    Website,
    Position_Location,
    Title_of_Position,
    How_Did_You_Hear_About_Us,
    Resume_Upload,
    message,
  } = req.body;

  let nodemailer = require('nodemailer');
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
    from: 'banumathi.thangavelu@tridentsqa.com',
    to: 'banumathi.thangavelu@tridentsqa.com',

    subject: `Message From ${req.body.First_Name}`,
    text: req.body.message + ' | Sent from: ' + req.body.email,
    html: `<p>You have a contact form submission</p><br>
    <p><strong>First_Name: </strong> ${First_Name}</p>
    <p><strong>Last_Name: </strong> ${Last_Name}</p>
    <p><strong>Email: </strong> ${email}</p>
    <p><strong>Phone: </strong> ${Phone}</p>
    <p><strong>Title: </strong> ${Title}</p>
    <p><strong>Organization: </strong> ${Organization}</p>
    <p><strong>Website: </strong> ${Website}</p>
    <p><strong>Position_Location: </strong> ${Position_Location}</p>
    <p><strong>Title_of_Position: </strong> ${Title_of_Position}</p>
    <p><strong>How_Did_You_Hear_About_Us: </strong> ${How_Did_You_Hear_About_Us}</p>
    <p><strong>Resume_Upload: </strong> ${Resume_Upload}</p>
    <p><strong>Message: </strong> ${message}</p>`,
    // attachments: [
    //   {
    //     File: `req.files[0],
    //     raw:
    //       'Content-Type: text.txt\r\n' +
    //       'Content-Disposition: attachment;\r\n' +
    //       '\r\n' +
    //       'Hello world!',
    //   },
    // ],
    attachments: {
      path: '/home/banumathi/Documents/Banumathi/testing.txt',
    },
  };
  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
  res.status(200);
}
