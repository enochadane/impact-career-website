const AccountDelete = (user) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>Delete Account Request</title>
    </head>
    <body>
        <p>Dear ${user.firstName},</p>
        <p>We have received a request to delete your account and associated personal data from our website. Before we proceed with this request, we want to ensure that it is indeed coming from you and not an unauthorized party. This additional step is crucial to protect your privacy and prevent any unintended account deletions.</p>
        <p>If you did not initiate this request, please disregard this email, and no further action is required on your part.</p>
        <p>However, if you did initiate the request, please click on the following link within the next 48 hours to confirm your account deletion:</p>
        <p><a href="${
          process.env.SERVER + "/candidate/delete-account/" + user._id
        }">Account Deletion Confirmation Link</a></p>
        <p>Please note that clicking the link will immediately delete your account and all associated data permanently. This action cannot be undone, and you will lose access to any job application history, preferences, and other account-related information.</p>
        <p>If you believe this request was not made by you, or if you have any questions or concerns, please reply to this email, and our support team will assist you promptly.</p>
        <p>Thank you for your attention to this matter.</p>
        <p>Sincerely,<br>
        Impactcareers team</p>
    </body>
    </html>
    `;
};

module.exports = AccountDelete;
