require('dotenv').config();

const MagicLinkEmailBody = (user, magicId) => {
  const name = user.firstName;
  const magicLink = `${process.env.HOME_PAGE}/?email=${user.email}&ml=${magicId}`;

  return `
    <p>
        Hi ${name},
    </p>
    <p>
        Use this magic link below to log in to your account. 
        Please note that this link can only be used to log in once and lasts for one hour.
    </p>
    <p>
        Log in by clicking <a href="${magicLink}">here</a>.
    </p>
    <p>
        Cheers, <br>
        Impactcareers team
    </p>
    `;
};

module.exports = MagicLinkEmailBody;
