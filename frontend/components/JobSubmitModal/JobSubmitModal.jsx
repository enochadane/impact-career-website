import * as React from 'react';
import { useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import CloseIcon from '@mui/icons-material/Close';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import useInput from '../../hooks/use-input';
import emailValidation from '../../utils/emailValidation';
import isValidURL from '../../utils/urlValidation';
import sendEmployerData from '../../utils/sendEmployerData';
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

export default function JobSubmitModal(props) {
  const [requiredFields, setRequiredFields] = useState(true);

  const {
    value: companyName,
    isValid: companyNameIsValid,
    hasError: companyNameHasError,
    valueChangeHandler: companyNameChangeHandler,
    inputBlurHandler: companyNameBlurHandler,
    reset: companyNameReset,
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
    value: employmentType,
    isValid: employmentTypeIsValid,
    hasError: employmentTypeHasError,
    valueChangeHandler: employmentTypeChangeHandler,
    inputBlurHandler: employmentTypeBlurHandler,
    reset: employmentTypeReset,
  } = useInput(nameValidation);

  const {
    value: jobTitle,
    isValid: jobTitleIsValid,
    hasError: jobTitleHasError,
    valueChangeHandler: jobTitleChangeHandler,
    inputBlurHandler: jobTitleBlurHandler,
    reset: jobTitleReset,
  } = useInput((s) => s.length !== 0 && s.length < 100);

  const {
    value: description,
    isValid: descriptionIsValid,
    hasError: descriptionHasError,
    valueChangeHandler: descriptionChangeHandler,
    inputBlurHandler: descriptionBlurHandler,
    reset: descriptionReset,
  } = useInput((s) => s.length !== 0 && s.length < 100);

  const {
    value: location,
    isValid: locationValid,
    hasError: locationHasError,
    valueChangeHandler: locationChangeHandler,
    inputBlurHandler: locationBlurHandler,
    reset: locationReset,
  } = useInput((s) => s.length !== 0 && s.length < 100);

  const {
    value: salary,
    isValid: salaryValid,
    hasError: salaryHasError,
    valueChangeHandler: salaryChangeHandler,
    inputBlurHandler: salaryBlurHandler,
    reset: salaryReset,
  } = useInput((s) => s.length !== 0 && s.length < 100);

  const resetFields = () => {
    companyNameReset();
    emailReset();
    phoneReset();
    employmentTypeReset();
    jobTitleReset();
    descriptionReset();
    locationReset();
    salaryReset();
    setRequiredFields(true);
  };

  const handleApply = () => {
    if (companyNameIsValid && emailIsValid) {
      setRequiredFields(true);
      //send request to backend to save information
      const employersData = {
        companyName,
        email,
        phone,
        employmentType,
        jobTitle,
        jobDescription: description,
        jobLocation: location,
        salaryRange: salary,
      };

      sendEmployerData(employersData);

      resetFields();

      props.onClose();

      sendEmail(
        { ...employersData, firstName: companyName, lastName: companyName },
        'employer_job_post'
      );
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
              label='Company Name'
              variant='outlined'
              required
              sx={{ width: '100%' }}
              value={companyName}
              onBlur={companyNameBlurHandler}
              onChange={companyNameChangeHandler}
              error={companyNameHasError}
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
            <FormControl fullWidth>
              <InputLabel id='demo-simple-select-label'>
                Employment type
              </InputLabel>
              <Select
                // value={age}
                value={employmentType}
                label='Employment type'
                // onChange={handleChange}
                onChange={employmentTypeChangeHandler}
              >
                <MenuItem value='Full time'>Full time</MenuItem>
                <MenuItem value='Part time'>Part time</MenuItem>
                <MenuItem value='Contact'>Contract</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={12}>
            <TextField
              label='Job Title'
              variant='outlined'
              sx={{ width: '100%' }}
              value={jobTitle}
              onBlur={jobTitleBlurHandler}
              onChange={jobTitleChangeHandler}
              error={jobTitleHasError}
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <TextField
              id='outlined-multiline-static'
              label='Description'
              sx={{ width: '100%' }}
              multiline
              rows={4}
              value={description}
              onBlur={descriptionBlurHandler}
              onChange={descriptionChangeHandler}
              error={descriptionHasError}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label='Location/Remote'
              variant='outlined'
              type='url'
              sx={{ width: '100%' }}
              value={location}
              onBlur={locationBlurHandler}
              onChange={locationChangeHandler}
              error={locationHasError}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label='Salary range'
              variant='outlined'
              sx={{ width: '100%' }}
              value={salary}
              onBlur={salaryBlurHandler}
              onChange={salaryChangeHandler}
              error={salaryHasError}
            />
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
            <Button
              variant='contained'
              sx={{ backgroundColor: '#136533', width: '130px' }}
              onClick={handleApply}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
}
