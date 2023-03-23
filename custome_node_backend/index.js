const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { connectPinecone } = require("./db/pinecone");

const connectDB = require("./db/mongodb");
const candidate = require("./routes/candidate.route");
const job = require("./routes/job.route");

const app = express();
connectDB();
connectPinecone();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser());

app.use("/candidate", candidate);
app.use("/job", job);

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
