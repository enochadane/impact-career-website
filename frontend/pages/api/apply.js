// export default function (req, res) {
//   require("dotenv").config();

//   const {
//     First_Name,
//     Last_Name,
//     email,
//     Mobile_number,
//     Notice_Period,
//     LinkedIn_URL,
//     Your_Location,
//     Current_Salary,
//     Resume_Upload,
//   } = req.body;

//   let nodemailer = require("nodemailer");
//   const transporter = nodemailer.createTransport({
//     port: 465,
//     host: "smtp.gmail.com",
//     auth: {
//       user: "banumathi.thangavelu@tridentsqa.com",
//       pass: process.env.password,
//     },
//     secure: true,
//   });

//   const mailData = {
//     from: "banumathi.thangavelu@tridentsqa.com",
//     to: "banumathi.thangavelu@tridentsqa.com",
//     subject: `Message From ${req.body.First_Name}`,
//     text: req.body.message + " | Sent from: " + req.body.email,
//     html: `<p>You have a contact form submission</p><br>
//     <p><strong>First_Name: </strong> ${First_Name}</p>
//     <p><strong>Last_Name: </strong> ${Last_Name}</p>
//     <p><strong>Last_Name: </strong> ${email}</p>
//     <p><strong>Mobilenumber: </strong> ${Mobile_number}</p>
//     <p><strong>NoticePeriod: </strong> ${Notice_Period}</p>
//     <p><strong>Linkedin URL: </strong> ${LinkedIn_URL}</p>
//     <p><strong>Your Location: </strong> ${Your_Location}</p>
//     <p><strong>Current Salary: </strong> ${Current_Salary}</p>
//     <p><strong>Resume_Upload: </strong> ${Resume_Upload}</p>`,
//     attachments: {
//       // path: "/home/banumathi/Documents/Banumathi/testing.txt",
//     },
//   };
//   transporter.sendMail(mailData, function (err, info) {
//     if (err) console.log(err);
//     else console.log(info);
//   });
//   res.status(200);
// }
import multer from "multer";

import nextConnect from "next-connect";
import multer from "multer";

const upload = multer({
  storage: multer.diskStorage({
    destination: "./public/uploads",
    filename: (req, file, cb) => cb(null, file.originalname),
  }),
});

const apiRoute = nextConnect({
  onError(error, req, res) {
    res
      .status(501)
      .json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.use(upload.array("theFiles"));

apiRoute.post((req, res) => {
  res.status(200).json({ data: "success" });
});

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};
export default function (req, res) {
  require("dotenv").config();

  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "lakshmigayathri.sivasankar@tridentsqa.com",
      pass: process.env.password,
    },
    secure: true,
  });
  const upload = multer({
    storage: multer.diskStorage({
      destination: "./public/uploads",
      filename: (req, file, cb) => cb(null, file.originalname),
    }),
  });
  const ApplyData = {
    html: `<p>Sent from:
    ${req.body.email}</p><div>First Name:${req.body.First_Name}</div><div>Last Name:${req.body.Last_Name}</div><div>Mobile number:${req.body.Mobile_number}</div><div>Notice Period:${req.body.Notice_Period}</div><div>LinkedIn URL:${req.body.LinkedIn_URL}</div><div>Your Location:${req.body.Your_Location}</div><div>Current Salary:${req.body.Current_Salary}</div><div>Resume Upload:${req.body.Resume_Upload}</div>`,
  };
  const mailData = {
    from: "lakshmigayathri.sivasankar@tridentsqa.com",
    to: "lakshmigayathri.sivasankar@tridentsqa.com",
    subject: `Message From ${req.body.First_Name}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    // html: contactData.html,
    html: ApplyData.html,

    // html: `<p>Sent from:
    // ${req.body.email}</p><div>First_Name:${req.body.First_Name}</div><div>Last_Name:${req.body.Last_Name}</div><div>Phone:${req.body.Phone}</div><div>Title:${req.body.Title}</div><div>Organization:${req.body.Organization}</div><div>Website:${req.body.Website}</div><div>Position_Location:${req.body.Position_Location}</div><div>Title_of_Position:${req.body.Title_of_Position}</div><div>How_Did_You_Hear_About_Us:${req.body.How_Did_You_Hear_About_Us}</div><div>message:${req.body.message}</div>`,
  };
  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
  res.status(200);
}
