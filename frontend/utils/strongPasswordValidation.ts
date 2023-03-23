//source: https://martech.zone/javascript-password-strength/
//Medium – If the length is 10 characters or more and has a combination of symbols, caps, text.
const strongPasswordValidation = (password: string) => {
  const mediumRegex = new RegExp(
    "^(?=.{10,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$",
    "g"
  );

  if (mediumRegex.test(password)) {
    return true;
  }
  return false;
};

export default strongPasswordValidation;
