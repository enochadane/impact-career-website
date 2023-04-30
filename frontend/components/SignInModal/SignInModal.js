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

  const validInputFields = emailIsValid;

  const resetFields = () => {
    emailReset();
    setLoading(false);
    setError(false);
  };

  const handleSignIn = async () => {
    const reqConfig = {
      method: "POST",
      url: `${process.env.SERVER}/candidate/magic-link`,
      data: {
        email,
      },
    };

    if (validInputFields) {
      setLoading(true);
      try {
        const response = await axios(reqConfig);

        if (response.status === 200) {
          resetFields();
          dispatch(userActions.loginModalHidden());
          dispatch(userActions.magicLinkModalVisible());
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
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography variant="h5" id="modal-modal-title" component="h2">
          👋🏾 Hey, welcome back
        </Typography>
        <TextField
          label="Enter your email address"
          variant="outlined"
          required
          sx={{ width: "100%" }}
          value={email}
          onBlur={emailBlurHandler}
          onChange={emailChangeHandler}
          error={emailHasError}
        />
        {error && (
          <Typography sx={{ color: "red", fontSize: "14px" }}>
            Email does not exist
          </Typography>
        )}
        <LoadingButton
          onClick={handleSignIn}
          loading={loading}
          disabled={!validInputFields}
          sx={{ width: "100%", height: "50px" }}
          variant="contained"
        >
          Get magic link
        </LoadingButton>
      </Box>
    </Modal>
  );
};

export default SignInModal;
