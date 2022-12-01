// import multer from "multer";
// import path from "path";
// import handler from "./api/contact";

// let Storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./public");
//   },
//   filename: function (req, file, cb) {
//     return cb(null, file, fieldname + "_" + Date.now + "_" + file.originalname);
//   },
// });

// let upload = multer({
//   storage: Storage,
// });

// let uploadFile = upload.single("file");
// handler.use(uploadFile);
// handler.post((req, res) => {
//   console.log("req", req.file);
//   console.log("body", req.body);
//   res.send(200).send("uploaded file");
// });

// export default handler;
