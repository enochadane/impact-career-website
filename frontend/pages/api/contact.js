import nodemailer from "nodemailer";
import "dotenv/config";
export const config = {
  api: {
    bodyParser: {
      sizeLimit: "3mb",
    },
  },
};

export default function (req, res) {
  const {
    First_Name,
    Last_Name,
    email,
    Phone,
    Title,
    Organization,
    Website,
    Position_Type,
    Position_Location,
    Title_of_Position,
    How_Did_You_Hear_About_Us,
    Resume_Upload,
    Resume_title,
    message,
  } = req.body;

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.username,
      pass: process.env.password,
    },
    secure: true,
  });
  const mailData = {
    from: "lakshmigayathri.sivasankar@tridentsqa.com",
    to: "lakshmigayathri.sivasankar@tridentsqa.com",
    subject: `Contact Form Submitted by ${req.body.First_Name}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<p>Contact Form Submission Details</p><br>
    <p><strong>First Name: </strong> ${First_Name}</p>
    <p><strong>Last Name: </strong> ${Last_Name}</p>
    <p><strong>Email: </strong> ${email}</p>
    <p><strong>Phone: </strong> ${Phone}</p>
    <p><strong>Title: </strong> ${Title}</p>
    <p><strong>Organization: </strong> ${Organization}</p>
    <p><strong>Website: </strong> ${Website}</p>
    <p><strong>Position Type: </strong> ${Position_Type}</p>
    <p><strong>Position Location: </strong> ${Position_Location}</p>
    <p><strong>Title of Position: </strong> ${Title_of_Position}</p>
    <p><strong>How Did You Hear About Us: </strong> ${How_Did_You_Hear_About_Us}</p>
    <p><strong>Resume Upload: </strong> ${Resume_title}</p>
    <p><strong>Message: </strong> ${message}</p>`,
    attachments: {
      filename: Resume_title,
      path: Resume_Upload,
    },
  };
  transporter.sendMail(mailData, function (err, info) {
    if (err) {
      console.log(err);
      res.status(500).json({
        success: false,
        message: "Something went wrong",
      });
    } else {
      console.log(info);
      res.status(200).json({
        success: true,
        message: "Mail successfully sent",
      });
    }
  });
}
