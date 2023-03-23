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
import strongPasswordValidation from "../../utils/strongPasswordValidation";

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

const SignInModal = () => {
  const [loading, setLoading] = useState();
  const [error, setError] = useState(false);

  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector((state) => state.user);

  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput(emailValidation);

  const {
    value: password,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: passwordReset,
  } = useInput(strongPasswordValidation);

  const validInputFields = passwordIsValid && emailIsValid;

  const resetFields = () => {
    emailReset();
    passwordReset();
    setLoading(false);
    setError(false);
  };

  const handleSignIn = async () => {
    const reqConfig = {
      method: "POST",
      url: `${process.env.SERVER}/candidate/sign-in`,
      data: {
        email,
        password,
      },
    };

    if (validInputFields) {
      setLoading(true);
      try {
        const response = await axios(reqConfig);

        if (response.status === 200) {
          dispatch(userActions.setUserData(response.data.user));
          resetFields();
          dispatch(userActions.loginModalHidden());
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
    dispatch(userActions.loginModalHidden());
    resetFields();
  };

  return (
    <Modal
      open={user.login}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={style}>
        <Typography variant='h5' id='modal-modal-title' component='h2'>
          👋🏾 Hey, welcome back
        </Typography>
        <Typography
          sx={{ color: "#696969" }}
          variant='subtitle'
          id='modal-modal-description'
        >
          Enter your sign In details
        </Typography>
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
        <TextField
          label='Password'
          variant='outlined'
          type='password'
          required
          sx={{ width: "100%" }}
          value={password}
          onBlur={passwordBlurHandler}
          onChange={passwordChangeHandler}
          error={passwordHasError}
        />
        {error && (
          <Typography sx={{ color: "red", fontSize: "14px" }}>
            Email and password do not match
          </Typography>
        )}
        <LoadingButton
          onClick={handleSignIn}
          loading={loading}
          disabled={!validInputFields}
          sx={{ width: "100%", height: "50px" }}
          variant='contained'
        >
          Sign In
        </LoadingButton>
      </Box>
    </Modal>
  );
};

export default SignInModal;
