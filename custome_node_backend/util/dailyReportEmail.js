const dailyReport = require("./dailyReport");
const sendEmail = require("./sendEmail");

const sendDailyReportEmail = async (report) => {
  const {
    activeCandidatesCount,
    newCandidatesCount,
    unsubscribedCount,
    unsubscribedTwentyFourHoursAgoCount,
  } = await dailyReport();

  const html = `
        <html>
            <head>
                <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet">
                <style>
                    * {
                        box-sizing: border-box;
                        margin: 0;
                        padding: 0;
                        font-family: 'Roboto', sans-serif;
                    }
                    .container {
                        max-width: 600px;
                        margin: 0 auto;
                        padding: 32px;
                        background-color: #f2f2f2;
                    }
                    h1 {
                        font-size: 36px;
                        font-weight: 700;
                        margin-bottom: 16px;
                    }
                    h2 {
                        font-size: 24px;
                        font-weight: 500;
                        margin-bottom: 16px;
                    }
                    p {
                        font-size: 18px;
                        margin-bottom: 16px;
                    }
                    .stat {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        margin-bottom: 16px;
                        padding: 16px;
                        border-radius: 4px;
                        background-color: #fff;
                        box-shadow: 0px 2px 4px rgba(0,0,0,0.1);
                    }
                    .stat h3 {
                        font-size: 24px;
                        font-weight: 500;
                        margin-right: 16px;
                    }
                    .stat p {
                        font-size: 18px;
                        margin: 0;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <h1>Daily Report</h1>
                    <h2>Overview</h2>
                    <div class="stat">
                        <h3>Active Candidates</h3>
                        <p>${activeCandidatesCount}</p>
                    </div>
                    <div class="stat">
                        <h3>New Candidates (Last 24 Hours)</h3>
                        <p>${newCandidatesCount}</p>
                    </div>
                    <div class="stat">
                        <h3>Unsubscribed Candidates</h3>
                        <p>${unsubscribedCount}</p>
                    </div>
                    <div class="stat">
                        <h3>Unsubscribed Candidates (Last 24 Hours)</h3>
                        <p>${unsubscribedTwentyFourHoursAgoCount}</p>
                    </div>
                </div>
            </body>
        </html>
    `;

  const emailConfig = {
    to: [
      "edgar.green@lex560.com",
      "edgar.green@steadtech.com",
      "natnaelasmare777@gmail.com",
    ],
    subject: "Daily Report",
    html,
  };

  await sendEmail(emailConfig);
  return html;
};

module.exports = sendDailyReportEmail;
