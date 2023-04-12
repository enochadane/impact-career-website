import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

import Box from "@mui/material/Box";
import LoadingButton from "@mui/lab/LoadingButton";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";

import useInput from "../../hooks/use-input";

import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../../store/user";
import emailValidation from "../../utils/emailValidation";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid #000",
  borderRadius: "5px",
  p: 4,
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};

function nameValidation(str) {
  return str.length > 0 && str.length < 100 && !/\d/.test(str);
}

const SignupModal = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector((state) => state.user);

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

  const validInputFields = firstNameIsValid && lastNameIsValid && emailIsValid;

  const resetFields = () => {
    firstNameReset();
    lastNameReset();
    emailReset();
    setLoading(false);
    setError(false);
  };

  const handleSignup = async () => {
    const reqConfig = {
      method: "POST",
      url: `${process.env.SERVER}/candidate/sign-up`,
      data: {
        firstName,
        lastName,
        email,
      },
    };

    if (validInputFields) {
      setLoading(true);
      try {
        const response = await axios(reqConfig);
        if (response.status === 200) {
          dispatch(userActions.setUserData(response.data));
          resetFields();
          dispatch(userActions.registerModalHidden());
          router.push("/profile");
        }
      } catch (err) {
        setError(true);
        console.log(err);
      }
      setLoading(false);
    }
  };

  const handleClose = () => {
    dispatch(userActions.registerModalHidden());
    resetFields();
  };

  return (
    <Modal
      open={user.register}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={style}>
        <Typography variant='h5' id='modal-modal-title' component='h2'>
          👋🏾 Hey, welcome
        </Typography>
        <Typography
          sx={{ color: "#696969" }}
          variant='subtitle'
          id='modal-modal-description'
        >
          Please enter the following details to register
        </Typography>
        <TextField
          label='First Name'
          variant='outlined'
          required
          sx={{ width: "100%" }}
          value={firstName}
          onBlur={firstNameBlurHandler}
          onChange={firstNameChangeHandler}
          error={firstNameHasError}
        />
        <TextField
          label='Last Name'
          variant='outlined'
          required
          sx={{ width: "100%" }}
          value={lastName}
          onBlur={lastNameBlurHandler}
          onChange={lastNameChangeHandler}
          error={lastNameHasError}
        />
        <TextField
          label='Email'
          variant='outlined'
          required
          sx={{ width: "100%" }}
          value={email}
          onBlur={emailBlurHandler}
          onChange={emailChangeHandler}
          error={emailHasError}
        />
        {error && (
          <Typography sx={{ color: "red", fontSize: "14px" }}>
            Email already exists
          </Typography>
        )}

        <LoadingButton
          onClick={handleSignup}
          loading={loading}
          disabled={!validInputFields}
          sx={{ width: "100%", height: "50px" }}
          variant='contained'
        >
          Sign Up
        </LoadingButton>
      </Box>
    </Modal>
  );
};

export default SignupModal;
