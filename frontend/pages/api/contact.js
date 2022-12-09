export default function (req, res) {
  require('dotenv').config();

  let nodemailer = require('nodemailer');
  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: 'banumathi.thangavelu@tridentsqa.com',
      pass: process.env.password,
    },
    secure: true,
  });
  const mailData = {
    from: 'banumathi.thangavelu@tridentsqa.com',
    to: 'banumathi.thangavelu@tridentsqa.com',

    subject: `Message From ${req.body.First_Name}`,
    text: req.body.message + ' | Sent from: ' + req.body.email,
    html: `<p>Sent from:
    ${req.body.email}</p><div>First_Name:${req.body.First_Name}</div><div>Last_Name:${req.body.Last_Name}</div><div>Phone:${req.body.Phone}</div><div>Title:${req.body.Title}</div><div>Organization:${req.body.Organization}</div><div>Website:${req.body.Website}</div><div>Position_Location:${req.body.Position_Location}</div>Title_of_Position:${req.body.Title_of_Position}</div></div>How_Did_You_Hear_About_Us:${req.body.How_Did_You_Hear_About_Us}</div></div>message:${req.body.message}</div>`,
    // File: `${File}`,

    // attachments: [
    //   {
    //     filename: 'image_name.png',
    //     path: 'public/upload/image_name.png',
    //     cid: 'SOME_ID_FOR_NODEMAILER',
    //   },
    // ],
  };
  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
  res.status(200);
}
