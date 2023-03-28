import { useState } from "react";
import axios from "axios";

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
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import AddWorkHistory from "../components/CandidateProfile/AddWorkHistory";
import AddCertifications from "../components/CandidateProfile/AddCertifications";
import AddEducation from "../components/CandidateProfile/AddEducation";

import useInput from "../hooks/use-input";
import useHttp from "../hooks/use-http";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../store/user";

import emailValidation from "../utils/emailValidation";

function nameValidation(str) {
  return str.length > 0 && str.length < 100 && !/\d/.test(str);
}

const Profile = () => {
  const user = useSelector((state) => state.user);

  const [show, setShow] = useState();
  const [workHistory, setWorkHistory] = useState(user.workHistory);
  const [certifications, setCertifications] = useState(user.certifications);
  const [education, setEducation] = useState(user.education);

  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const dispatch = useDispatch();
  const { sendRequest, isLoading } = useHttp();

  const {
    value: firstName,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: firstNameReset,
  } = useInput(nameValidation, user.firstName);

  const {
    value: lastName,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: lastNameReset,
  } = useInput(nameValidation, user.lastName);

  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput(emailValidation, user.email);

  const {
    value: phone,
    isValid: phoneIsValid,
    hasError: phoneHasError,
    valueChangeHandler: phoneChangeHandler,
    inputBlurHandler: phoneBlurHandler,
    reset: phoneReset,
  } = useInput((s) => true, user.phone);

  const {
    value: yearsOfExperience,
    isValid: yearsOfExperienceIsValid,
    hasError: yearsOfExperienceHasError,
    valueChangeHandler: yearsOfExperienceChangeHandler,
    inputBlurHandler: yearsOfExperienceBlurHandler,
    reset: yearsOfExperienceReset,
  } = useInput((s) => s !== "" && +s >= 0, user.yearsOfExperience);

  const {
    value: country,
    isValid: countryIsValid,
    hasError: countryHasError,
    valueChangeHandler: countryChangeHandler,
    inputBlurHandler: countryBlurHandler,
    reset: countryReset,
  } = useInput((s) => s !== "", user.country);

  const {
    value: idealJobDescription,
    isValid: idealJobDescriptionIsValid,
    hasError: idealJobDescriptionHasError,
    valueChangeHandler: idealJobDescriptionChangeHandler,
    inputBlurHandler: idealJobDescriptionBlurHandler,
    reset: idealJobDescriptionReset,
  } = useInput((s) => s !== "", user.idealJobDescription);

  const [skills, setSkills] = useState(user.skills);

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
      id: user.id,
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
    dispatch(
      userActions.setUserData({ ...userProfile, matches: response.data })
    );
    setShowSuccessModal(true);
    // resetFields();
  };

  const handleModalClose = () => {
    setShowSuccessModal(false);
  };

  const handleWorkRemove = async (work) => {
    const updatedWorkHistory = workHistory.filter((w) => w._id != work._id);

    setWorkHistory(updatedWorkHistory);

    const reqConfig = {
      method: "PATCH",
      url: `${process.env.SERVER}/candidate/update-work-history/${user.id}`,
      data: updatedWorkHistory,
    };

    const response = await axios(reqConfig);
  };

  const handleCertificationRemove = async (certification) => {
    const updatedCertifications = certifications.filter(
      (c) => c._id != certification._id
    );

    setCertifications(updatedCertifications);

    const reqConfig = {
      method: "PATCH",
      url: `${process.env.SERVER}/candidate/update-certifications/${user.id}`,
      data: updatedCertifications,
    };

    const response = await axios(reqConfig);
  };

  const handleEducationRemove = async (edu) => {
    const updatedEducation = education.filter((e) => e._id != edu._id);

    setEducation(updatedEducation);

    const reqConfig = {
      method: "PATCH",
      url: `${process.env.SERVER}/candidate/update-education/${user.id}`,
      data: updatedEducation,
    };

    const response = await axios(reqConfig);
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
              <Grid
                item
                xs={12}
                sx={{
                  display: "flex",
                  gap: "10px",
                  justifyContent: "space-between",
                }}
              >
                <Box sx={{ display: "flex", gap: "10px" }}>
                  <AdjustIcon sx={{ color: "#7F7F7F" }} />
                  <Typography sx={{ color: "#696969" }}>
                    {work.position + " / " + work.company}
                  </Typography>
                </Box>
                <Button onClick={() => handleWorkRemove(work)}>
                  <DeleteForeverIcon />
                </Button>
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
              <Grid
                item
                xs={12}
                sx={{
                  display: "flex",
                  gap: "10px",
                  justifyContent: "space-between",
                }}
              >
                <Box sx={{ display: "flex", gap: "10px" }}>
                  <GppGoodIcon sx={{ color: "#7F7F7F" }} />
                  <Typography sx={{ color: "#696969" }}>
                    {certificate.name}
                  </Typography>
                </Box>
                <Button onClick={() => handleCertificationRemove(certificate)}>
                  <DeleteForeverIcon />
                </Button>
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
              <Grid
                item
                xs={12}
                sx={{
                  display: "flex",
                  gap: "10px",
                  justifyContent: "space-between",
                }}
              >
                <Box sx={{ display: "flex", gap: "10px" }}>
                  <SchoolIcon sx={{ color: "#7F7F7F" }} />
                  <Typography sx={{ color: "#696969" }}>
                    {edu.degree}
                    {/* Electrical and Computer Engineering */}
                  </Typography>
                </Box>
                <Button onClick={() => handleEducationRemove(edu)}>
                  <DeleteForeverIcon />
                </Button>
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
              Save
            </LoadingButton>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Profile;
