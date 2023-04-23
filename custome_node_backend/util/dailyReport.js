const Candidate = require("../models/Candidate");

const dailyReport = async () => {
  try {
    const twentyFourHoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);

    //get the number of total candidates that did not unsubscribe (doNotDisturb: false)
    const activeCandidatesCount = await Candidate.countDocuments({
      doNotDisturb: { $ne: true },
    });

    //get the number of candidates who created an account in the last 24hours (calculate using the createdAt field)
    const newCandidatesCount = await Candidate.countDocuments({
      createdAt: { $gte: twentyFourHoursAgo },
    });

    //get total candidates who unsubscribed (where doNotDisturb: true)
    const unsubscribedCount = await Candidate.countDocuments({
      doNotDisturb: true,
    });

    //get candidates who unsubscribed in the last 24hours (calculate using unsubscribedAt filed)
    const unsubscribedTwentyFourHoursAgoCount = await Candidate.countDocuments({
      $and: [
        { unsubscribedAt: { $gte: twentyFourHoursAgo } },
        {
          doNotDisturb: true,
        },
      ],
    });

    return {
      activeCandidatesCount,
      newCandidatesCount,
      unsubscribedCount,
      unsubscribedTwentyFourHoursAgoCount,
    };
  } catch (error) {
    console.log(error);
  }
};

module.exports = dailyReport;
