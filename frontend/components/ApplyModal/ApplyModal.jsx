import * as React from 'react';
import { useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import CloseIcon from '@mui/icons-material/Close';

import useInput from '../../hooks/use-input';
import emailValidation from '../../utils/emailValidation';
import isValidURL from '../../utils/urlValidation';
import sendCandidateData from '../../utils/sendCandidateData';

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

export default function ApplyModal(props) {
  const [similarJobs, setSimilarJobs] = useState(false);
  const [requiredFields, setRequiredFields] = useState(true);

  const {
    value: firstName,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: firstNameReset,
  } = useInput((s) => s.length !== 0 && s.length < 100);

  const {
    value: lastName,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: lastNameReset,
  } = useInput((s) => s.length !== 0 && s.length < 100);

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
    value: linkedInUrl,
    isValid: linkedInUrlIsValid,
    hasError: linkedInUrlHasError,
    valueChangeHandler: linkedInUrlChangeHandler,
    inputBlurHandler: linkedInUrlBlurHandler,
    reset: linkedInUrlReset,
  } = useInput((s) => isValidURL(s));

  const {
    value: country,
    isValid: countryIsValid,
    hasError: countryHasError,
    valueChangeHandler: countryChangeHandler,
    inputBlurHandler: countryBlurHandler,
    reset: countryReset,
  } = useInput((s) => s.length !== 0 && s.length < 100);

  const {
    value: city,
    isValid: cityIsValid,
    hasError: cityHasError,
    valueChangeHandler: cityChangeHandler,
    inputBlurHandler: cityBlurHandler,
    reset: cityReset,
  } = useInput((s) => s.length !== 0 && s.length < 100);

  const handleApply = () => {
    if (firstNameIsValid && lastNameIsValid && emailIsValid) {
      setRequiredFields(true);
      //send request to backend to save information
      const candidateDate = {
        firstName,
        lastName,
        email,
        phone,
        linkedInUrl,
        notifyForSimilarJobs: similarJobs,
        countryPreference: country,
        cityPreference: city,
        jobId: props.jobId,
      };

      sendCandidateData(candidateDate);

      firstNameReset();
      lastNameReset();
      emailReset();
      phoneReset();
      linkedInUrlReset();
      setSimilarJobs(false);
      countryReset();
      cityReset();

      props.onClose();

      window.location.href = props.jobUrl;
    } else {
      setRequiredFields(false);
    }
  };

  return (
    <Modal open={props.visible} onClose={props.onClose}>
      <Box sx={containerStyle}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <CloseIcon onClick={props.onClose} />
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
              label='Phone Number'
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
          <Grid
            item
            xs={12}
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Checkbox
              checked={similarJobs}
              onChange={(e) => setSimilarJobs(e.target.checked)}
            />
            <Typography variant='body1'>
              Contact me for similar jobs like this
            </Typography>
          </Grid>
          {similarJobs && (
            <>
              <Grid item xs={12} md={6}>
                <TextField
                  label='Preferred country or remote'
                  variant='outlined'
                  sx={{ width: '100%' }}
                  value={country}
                  onBlur={countryBlurHandler}
                  onChange={countryChangeHandler}
                  error={countryHasError}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  id='outlined-basic'
                  label='City'
                  variant='outlined'
                  type='url'
                  sx={{ width: '100%' }}
                  value={city}
                  onBlur={cityBlurHandler}
                  onChange={cityChangeHandler}
                  error={cityHasError}
                />
              </Grid>
            </>
          )}
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
                All required fields need to be field
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
            <Button
              variant='contained'
              sx={{ backgroundColor: '#136533', width: '130px' }}
              onClick={handleApply}
            >
              Apply
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
}
