const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { connectPinecone } = require("./db/pinecone");
const sendDailyReportEmail = require("./util/dailyReportEmail");
const cron = require("cron");

const connectDB = require("./db/mongodb");
const candidate = require("./routes/candidate.route");
const job = require("./routes/job.route");

const app = express();
connectDB();
connectPinecone();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser());

app.use("/example/candidate", candidate);
app.use("/example/job", job);

const dailyReportSchedule = new cron.CronJob("0 0 0 * * *", function () {
  console.log("Daily report cron job initiated");
  sendDailyReportEmail();
});

dailyReportSchedule.start();

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
