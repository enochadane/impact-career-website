import { useState } from "react";

import SuccessModal from "../components/SuccessModal/SuccessModal";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import LoadingButton from "@mui/lab/LoadingButton";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

import BasicInfo from "../components/CandidateProfile/BasicInfo";
import AdjustIcon from "@mui/icons-material/Adjust";
import GppGoodIcon from "@mui/icons-material/GppGood";
import SchoolIcon from "@mui/icons-material/School";

import AddWorkHistory from "../components/CandidateProfile/AddWorkHistory";
import AddCertifications from "../components/CandidateProfile/AddCertifications";
import AddEducation from "../components/CandidateProfile/AddEducation";

import useInput from "../hooks/use-input";
import useHttp from "../hooks/use-http";

import emailValidation from "../utils/emailValidation";

function nameValidation(str) {
  return str.length > 0 && str.length < 100 && !/\d/.test(str);
}

const Profile = () => {
  const [show, setShow] = useState();
  const [workHistory, setWorkHistory] = useState([]);
  const [certifications, setCertifications] = useState([]);
  const [education, setEducation] = useState([]);

  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const { sendRequest, isLoading } = useHttp();

  const {
    value: firstName,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: firstNameReset,
  } = useInput(nameValidation);

  const {
    value: lastName,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: lastNameReset,
  } = useInput(nameValidation);

  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput(emailValidation);

  const {
    value: phone,
    isValid: phoneIsValid,
    hasError: phoneHasError,
    valueChangeHandler: phoneChangeHandler,
    inputBlurHandler: phoneBlurHandler,
    reset: phoneReset,
  } = useInput((s) => true);

  const {
    value: yearsOfExperience,
    isValid: yearsOfExperienceIsValid,
    hasError: yearsOfExperienceHasError,
    valueChangeHandler: yearsOfExperienceChangeHandler,
    inputBlurHandler: yearsOfExperienceBlurHandler,
    reset: yearsOfExperienceReset,
  } = useInput((s) => s !== "" && +s >= 0);

  const {
    value: country,
    isValid: countryIsValid,
    hasError: countryHasError,
    valueChangeHandler: countryChangeHandler,
    inputBlurHandler: countryBlurHandler,
    reset: countryReset,
  } = useInput((s) => s !== "");

  const {
    value: idealJobDescription,
    isValid: idealJobDescriptionIsValid,
    hasError: idealJobDescriptionHasError,
    valueChangeHandler: idealJobDescriptionChangeHandler,
    inputBlurHandler: idealJobDescriptionBlurHandler,
    reset: idealJobDescriptionReset,
  } = useInput((s) => s !== "");

  const [skills, setSkills] = useState([]);

  const basicInfoProps = {
    firstName,
    firstNameIsValid,
    firstNameHasError,
    firstNameChangeHandler,
    firstNameBlurHandler,
    firstNameReset,
    lastName,
    lastNameIsValid,
    lastNameHasError,
    lastNameChangeHandler,
    lastNameBlurHandler,
    lastNameReset,
    email,
    emailIsValid,
    emailHasError,
    emailChangeHandler,
    emailBlurHandler,
    emailReset,
    phone,
    phoneIsValid,
    phoneHasError,
    phoneChangeHandler,
    phoneBlurHandler,
    phoneReset,
    yearsOfExperience,
    yearsOfExperienceIsValid,
    yearsOfExperienceHasError,
    yearsOfExperienceChangeHandler,
    yearsOfExperienceBlurHandler,
    yearsOfExperienceReset,
    country,
    countryIsValid,
    countryHasError,
    countryChangeHandler,
    countryBlurHandler,
    countryReset,
    skills,
    setSkills,
  };

  const validApplication =
    firstNameIsValid &&
    lastNameIsValid &&
    emailIsValid &&
    phoneIsValid &&
    yearsOfExperienceIsValid &&
    countryIsValid &&
    idealJobDescription;

  const handleShow = (val) => {
    if (show === val) {
      setShow();
    } else {
      setShow(val);
    }
  };

  const resetFields = () => {
    setWorkHistory([]);
    setCertifications([]);
    setEducation([]);
    firstNameReset();
    lastNameReset();
    emailReset();
    phoneReset();
    yearsOfExperienceReset();
    countryReset();
    idealJobDescriptionReset();
    setSkills([]);
  };

  const handleSubmit = async () => {
    const userProfile = {
      firstName,
      lastName,
      email,
      phone,
      yearsOfExperience,
      country,
      skills,
      workHistory,
      certifications,
      education,
      idealJobDescription,
    };

    const reqConfig = {
      method: "POST",
      url: `${process.env.SERVER}/candidate/add-profile`,
      data: userProfile,
    };

    const response = await sendRequest(reqConfig);
    // console.log("res: ", response);
    setShowSuccessModal(true);
    resetFields();
  };

  const handleModalClose = () => {
    setShowSuccessModal(false);
  };

  return (
    <>
      <div className='Banner profile-banner'>
        <div className='bg-black bg-opacity-50 px-4 rounded'>
          <h1>Apply once and let our AI powered matching do the rest</h1>
        </div>
      </div>
      <SuccessModal visible={showSuccessModal} onClose={handleModalClose} />
      <Box sx={{ maxWidth: "700px", margin: "auto", padding: "30px 10px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
            <Typography variant='overline'>
              The more details you give us the better matching we can do for
              you.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <BasicInfo props={basicInfoProps} />
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              variant='contained'
              sx={{ width: "100%", height: "50px" }}
              onClick={() => handleShow("add work history")}
            >
              Add work history
            </Button>
          </Grid>
          {show === "add work history" && (
            <Grid item xs={12}>
              <AddWorkHistory setWorkHistory={setWorkHistory} />
            </Grid>
          )}
          {workHistory &&
            workHistory.map((work) => (
              <Grid item xs={12} sx={{ display: "flex", gap: "10px" }}>
                <AdjustIcon sx={{ color: "#7F7F7F" }} />
                <Typography sx={{ color: "#696969" }}>
                  {work.position + " / " + work.company}
                </Typography>
              </Grid>
            ))}
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              variant='contained'
              sx={{ width: "100%", height: "50px" }}
              onClick={() => handleShow("add certifications and awards")}
            >
              Add Certifications and awards
            </Button>
          </Grid>
          {show === "add certifications and awards" && (
            <Grid item xs={12}>
              <AddCertifications setCertifications={setCertifications} />
            </Grid>
          )}
          {certifications &&
            certifications.map((certificate) => (
              <Grid item xs={12} sx={{ display: "flex", gap: "10px" }}>
                <GppGoodIcon sx={{ color: "#7F7F7F" }} />
                <Typography sx={{ color: "#696969" }}>
                  {certificate.name}
                </Typography>
              </Grid>
            ))}
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              variant='contained'
              sx={{
                width: "100%",
                height: "50px",
                hoverBackgroundColor: "#136533",
              }}
              onClick={() => handleShow("add education")}
            >
              Add Education
            </Button>
          </Grid>
          {show === "add education" && (
            <Grid item xs={12}>
              <AddEducation setEducation={setEducation} />
            </Grid>
          )}
          {education &&
            education.map((edu) => (
              <Grid item xs={12} sx={{ display: "flex", gap: "10px" }}>
                <SchoolIcon sx={{ color: "#7F7F7F" }} />
                <Typography sx={{ color: "#696969" }}>
                  {edu.degree}
                  {/* Electrical and Computer Engineering */}
                </Typography>
              </Grid>
            ))}
          <Grid
            item
            xs={12}
            md={12}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <TextField
              label='Explain to us your ideal job'
              variant='outlined'
              required
              multiline
              rows={2}
              sx={{ width: "100%" }}
              value={idealJobDescription}
              onBlur={idealJobDescriptionBlurHandler}
              onChange={idealJobDescriptionChangeHandler}
              error={idealJobDescriptionHasError}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <LoadingButton
              loading={isLoading}
              onClick={handleSubmit}
              disabled={!validApplication}
              variant='contained'
              sx={{ width: "100%", height: "50px" }}
            >
              Submit
            </LoadingButton>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Profile;
