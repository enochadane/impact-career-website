import * as React from 'react';
import { useState } from 'react';
import axios from 'axios';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import CloseIcon from '@mui/icons-material/Close';

import useInput from '../../hooks/use-input';
import emailValidation from '../../utils/emailValidation';
import isValidURL from '../../utils/urlValidation';
import sendCandidateData from '../../utils/sendCandidateData';
import sendEmail from '../../utils/sendEmail';

const containerStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 550,
  width: '100%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 4,
};

const headerStyle = {
  marginBottom: 5,
};

function nameValidation(str) {
  return str.length > 0 && str.length < 100 && !/\d/.test(str);
}

export default function LookingForEmployment(props) {
  const [requiredFields, setRequiredFields] = useState(true);
  const [file, setFile] = useState();
  const [loading, setLoading] = useState(false);

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
    value: location,
    isValid: locationIsValid,
    hasError: locationHasError,
    valueChangeHandler: locationChangeHandler,
    inputBlurHandler: locationBlurHandler,
    reset: locationReset,
  } = useInput((s) => s.length !== 0 && s.length < 100);

  const {
    value: salary,
    isValid: salaryIsValid,
    hasError: salaryHasError,
    valueChangeHandler: salaryChangeHandler,
    inputBlurHandler: salaryBlurHandler,
    reset: salaryReset,
  } = useInput((s) => s.length !== 0 && s.length < 100);

  const {
    value: linkedInUrl,
    isValid: linkedInUrlIsValid,
    hasError: linkedInUrlHasError,
    valueChangeHandler: linkedInUrlChangeHandler,
    inputBlurHandler: linkedInUrlBlurHandler,
    reset: linkedInUrlReset,
  } = useInput((s) => isValidURL(s));

  const resetFields = () => {
    firstNameReset();
    lastNameReset();
    emailReset();
    phoneReset();
    locationReset();
    salaryReset();
    linkedInUrlReset();
  };

  const handleFileSelect = async (e) => {
    let file = new FormData();
    file.append('files', e.target.files[0]);
    setFile(file);
  };

  const handleApply = async () => {
    if (firstNameIsValid && lastNameIsValid && emailIsValid) {
      setRequiredFields(true);
      setLoading(true);
      try {
        const response = await axios.post(
          `http://localhost:1337/api/upload`,
          file,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        );

        const candidateDate = {
          firstName,
          lastName,
          email,
          phoneNumber: phone,
          location,
          currentSalary: salary,
          linkedIn: linkedInUrl,
          resume: response.data[0].url,
        };

        sendCandidateData(candidateDate);
        resetFields();
        setLoading(false);
        // sendEmail(candidateDate, props.type);
      } catch (error) {
        console.log(error);
      }
      props.onClose();
    } else {
      setRequiredFields(false);
    }
  };

  const handleClose = () => {
    resetFields();

    props.onClose();
  };

  return (
    <Modal open={props.visible} onClose={handleClose}>
      <Box sx={containerStyle}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <CloseIcon onClick={handleClose} />
        </Box>
        <Typography variant='h6' component='h2' sx={headerStyle}>
          Please fill the details below
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              label='First Name'
              variant='outlined'
              required
              sx={{ width: '100%' }}
              value={firstName}
              onBlur={firstNameBlurHandler}
              onChange={firstNameChangeHandler}
              error={firstNameHasError}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label='Last Name'
              variant='outlined'
              required
              sx={{ width: '100%' }}
              value={lastName}
              onBlur={lastNameBlurHandler}
              onChange={lastNameChangeHandler}
              error={lastNameHasError}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label='Email'
              variant='outlined'
              type='email'
              required
              sx={{ width: '100%' }}
              value={email}
              onBlur={emailBlurHandler}
              onChange={emailChangeHandler}
              error={emailHasError}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label='Mobile Number'
              variant='outlined'
              sx={{ width: '100%' }}
              value={phone}
              onBlur={phoneBlurHandler}
              onChange={phoneChangeHandler}
              error={phoneHasError}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label='Location'
              variant='outlined'
              sx={{ width: '100%' }}
              value={location}
              onBlur={locationBlurHandler}
              onChange={locationChangeHandler}
              error={locationHasError}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label='Salary Expectation'
              variant='outlined'
              sx={{ width: '100%' }}
              value={salary}
              onBlur={salaryBlurHandler}
              onChange={salaryChangeHandler}
              error={salaryHasError}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label='LinkedIn Url'
              variant='outlined'
              type='url'
              sx={{ width: '100%' }}
              value={linkedInUrl}
              onBlur={linkedInUrlBlurHandler}
              onChange={linkedInUrlChangeHandler}
              error={linkedInUrlHasError}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Button
              variant='contained'
              sx={{ width: '100%', height: '90%', background: 'gray' }}
              onClick={() => document.getElementById('file')?.click()}
            >
              Resume
              <input
                id='file'
                type='file'
                accept='application/pdf'
                hidden
                onChange={handleFileSelect}
              />
            </Button>
          </Grid>
          {!requiredFields && (
            <Grid
              item
              xs={12}
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Typography variant='body1' sx={{ color: 'red' }}>
                All required fields need to be filled
              </Typography>
            </Grid>
          )}
          <Grid
            item
            xs={12}
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <LoadingButton
              variant='contained'
              sx={{ backgroundColor: '#136533', width: '130px' }}
              onClick={handleApply}
              loading={loading}
            >
              Submit
            </LoadingButton>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
}
