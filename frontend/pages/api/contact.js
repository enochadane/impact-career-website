import { mailOptions, transporter } from "../../config/nodemailer";

const CONTACT_MESSAGE_FIELDS = {
  Firstname: "Firstname",
  Lastname: "Lastname",
  email: "Email",
  Phone: "Phone",
  Title: "Title",
  Organization: "Organization",
  Website: "Website",
  Position_Type: "Position_Type",
  Position_Location: "Position_Location",
  Title_of_Position: "Title_of_Position",
  How_Did_You_Hear_About_Us: "How_Did_You_Hear_About_Us",
  Resume_Upload: "Resume_Upload",
  message: "message",
};
// import multer from "multer";
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     if (!fs.existsSync(__dirname + "./public/uploads")) {
//       fs.mkdirSync(__dirname + "./public/uploads");
//     }
//     cb(null, "./uploads");
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   },
// });

// const upload = multer({
//   storage: storage,
// });

const generateEmailContent = (data) => {
  const stringData = Object.entries(data).reduce(
    (str, [key, val]) =>
      (str += `${CONTACT_MESSAGE_FIELDS[key]}: \n${val} \n \n`),
    ""
  );
  const htmlData = Object.entries(data).reduce((str, [key, val]) => {
    return (str += `<h3 class="form-heading" align="left">${CONTACT_MESSAGE_FIELDS[key]}</h3><p class="form-answer" align="left">${val}</p>`);
  }, "");

  return {
    text: stringData,
    html: `<!DOCTYPE html><html> <head> <title></title> <meta charset="utf-8"/> <meta name="viewport" content="width=device-width, initial-scale=1"/> <meta http-equiv="X-UA-Compatible" content="IE=edge"/> <style type="text/css"> body, table, td, a{-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;}table{border-collapse: collapse !important;}body{height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important;}@media screen and (max-width: 525px){.wrapper{width: 100% !important; max-width: 100% !important;}.responsive-table{width: 100% !important;}.padding{padding: 10px 5% 15px 5% !important;}.section-padding{padding: 0 15px 50px 15px !important;}}.form-container{margin-bottom: 24px; padding: 20px; border: 1px dashed #ccc;}.form-heading{color: #2a2a2a; font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif; font-weight: 400; text-align: left; line-height: 20px; font-size: 18px; margin: 0 0 8px; padding: 0;}.form-answer{color: #2a2a2a; font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif; font-weight: 300; text-align: left; line-height: 20px; font-size: 16px; margin: 0 0 24px; padding: 0;}div[style*="margin: 16px 0;"]{margin: 0 !important;}</style> </head> <body style="margin: 0 !important; padding: 0 !important; background: #fff"> <div style=" display: none; font-size: 1px; color: #fefefe; line-height: 1px;  max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; " ></div><table border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td bgcolor="#ffffff" align="center" style="padding: 10px 15px 30px 15px" class="section-padding" > <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 500px" class="responsive-table" > <tr> <td> <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td> <table width="100%" border="0" cellspacing="0" cellpadding="0" > <tr> <td style=" padding: 0 0 0 0; font-size: 16px; line-height: 25px; color: #232323; " class="padding message-content" > <h2>New Contact Details!!!</h2> <div class="form-container">${htmlData}</div></td></tr></table> </td></tr></table> </td></tr></table> </td></tr></table> </body></html>`,
  };
};

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    if (
      !data.Firstname ||
      !data.Lastname ||
      !data.email ||
      !data.Phone ||
      !data.Title ||
      !data.Organization ||
      !data.Website ||
      !data.Position_Type ||
      !data.Position_Location ||
      !data.Title_of_Position ||
      !data.How_Did_You_Hear_About_Us ||
      !data.Resume_Upload ||
      !data.message
    ) {
      return res.status(400).send({ message: "Bad request" });
    }

    try {
      await transporter.sendMail({
        ...mailOptions,
        ...generateEmailContent(data),
        subject: data.subject,
        // to: "gaya3itsmee@gmail.com",
        subject: "IMPACT CAREER (TESTING)",
        attachments: [
          {
            // filename: req.files[0],
            raw:
              "Content-Type: text/plain\r\n" +
              "Content-Disposition: attachment;\r\n" +
              "\r\n" +
              "Hello world!",
          },
        ],
      });

      return res.status(200).json({ success: true });
    } catch (err) {
      console.log(err);
      return res.status(400).json({ message: err.message });
    }
  }
  return res.status(400).json({ message: "Bad request" });
};
export default handler;
// const upload = multer({
//   storage: multer.diskStorage({
//     destination: "./public/uploads",
//     filename: (req, file, cb) => cb(null, file.originalname),
//   }),
// });
// let uploadFiles = upload.array("attachments");
// let uploadFile = upload.single("attachments");
// let attachments = [];
// for (let i = 0; i < req.files.length; i++) {
//   let fileDetails = {
//     filename: req.files[i].filename,
//     path: req.files[i].path,
//   };
//   attachments.push(fileDetails);
// }
// handler.use(uploadFile);
// handler.post((req, res) => {
//   console.log("req", req.file);
//   console.log("body", req.body);
//   res.send(200).send("uploaded file");
// });
