import { useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import useInput from "../../hooks/use-input";

import { months_of_the_year } from "../../constants";

const level_of_education = [
  "Bachelors (or equivalent)",
  "Doctorate (or equivalent)",
  "MBA (or equivalent)",
  "Masters (or equivalent)",
  "Secondary/High School (or equivalent)",
  "Other degree",
];

const AddEducation = ({ setEducation }) => {
  const {
    value: educationLevel,
    isValid: educationLevelIsValid,
    hasError: educationLevelHasError,
    valueChangeHandler: educationLevelChangeHandler,
    inputBlurHandler: educationLevelBlurHandler,
    reset: educationLevelReset,
  } = useInput((s) => s !== "");

  const {
    value: degree,
    isValid: degreeIsValid,
    hasError: degreeHasError,
    valueChangeHandler: degreeChangeHandler,
    inputBlurHandler: degreeBlurHandler,
    reset: degreeReset,
  } = useInput((s) => s !== "");

  const {
    value: college,
    isValid: collegeIsValid,
    hasError: collegeHasError,
    valueChangeHandler: collegeChangeHandler,
    inputBlurHandler: collegeBlurHandler,
    reset: collegeReset,
  } = useInput((s) => s !== "");

  const {
    value: startingMonth,
    isValid: startingMonthIsValid,
    hasError: startingMonthHasError,
    valueChangeHandler: startingMonthChangeHandler,
    inputBlurHandler: startingMonthBlurHandler,
    reset: startingMonthReset,
  } = useInput((s) => s !== "");

  const {
    value: startingYear,
    isValid: startingYearIsValid,
    hasError: startingYearHasError,
    valueChangeHandler: startingYearChangeHandler,
    inputBlurHandler: startingYearBlurHandler,
    reset: startingYearReset,
  } = useInput((s) => s !== "" && +s > 1800);

  const {
    value: endingMonth,
    isValid: endingMonthIsValid,
    hasError: endingMonthHasError,
    valueChangeHandler: endingMonthChangeHandler,
    inputBlurHandler: endingMonthBlurHandler,
    reset: endingMonthReset,
  } = useInput((s) => s !== "");

  const {
    value: endingYear,
    isValid: endingYearIsValid,
    hasError: endingYearHasError,
    valueChangeHandler: endingYearChangeHandler,
    inputBlurHandler: endingYearBlurHandler,
    reset: endingYearReset,
  } = useInput((s) => s !== "" && +s > 1800);

  const [stillEnrolledHere, setStillEnrolledHere] = useState(false);

  const validEducation =
    educationLevelIsValid &&
    degreeIsValid &&
    collegeIsValid &&
    startingMonthIsValid &&
    startingYearIsValid &&
    ((endingMonthIsValid && endingYearIsValid) ||
      stillEnrolledHere !== undefined);

  const resetFields = () => {
    educationLevelReset();
    degreeReset();
    collegeReset();
    startingMonthReset();
    startingYearReset();
    endingMonthReset();
    endingYearReset();
    setStillEnrolledHere();
  };

  const handleAdd = () => {
    if (validEducation) {
      const education = {
        educationLevel,
        degree,
        college,
        startingMonth,
        startingYear,
        endingMonth,
        endingYear,
        stillEnrolledHere,
      };

      setEducation((prev) => [education, ...prev]);
      resetFields();
    }
  };

  return (
    <Box
      sx={{ border: "1px solid #7F7F7F", borderRadius: "5px", padding: "15px" }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Level of education
            </InputLabel>
            <Select
              value={educationLevel}
              onChange={educationLevelChangeHandler}
              label="Level of education"
            >
              {level_of_education.map((edu) => (
                <MenuItem value={edu}>{edu}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Degree"
            variant="outlined"
            required
            sx={{ width: "100%" }}
            value={degree}
            onBlur={degreeBlurHandler}
            onChange={degreeChangeHandler}
            error={degreeHasError}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="College"
            variant="outlined"
            required
            sx={{ width: "100%" }}
            value={college}
            onBlur={collegeBlurHandler}
            onChange={collegeChangeHandler}
            error={collegeHasError}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography sx={{ color: "#696969" }}>Starting date</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography sx={{ color: "#696969" }}>End date</Typography>
        </Grid>
        <Grid item xs={6} md={3}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Month</InputLabel>
            <Select
              value={startingMonth}
              onChange={startingMonthChangeHandler}
              label="Month"
            >
              {months_of_the_year.map((month) => (
                <MenuItem value={month}>{month}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6} md={3}>
          <TextField
            label="Year"
            variant="outlined"
            type="number"
            inputProps={{ min: 1800 }}
            required
            min="0"
            sx={{ width: "100%" }}
            value={startingYear}
            onBlur={startingYearBlurHandler}
            onChange={startingYearChangeHandler}
            error={startingYearHasError}
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Month</InputLabel>
            <Select
              value={endingMonth}
              onChange={endingMonthChangeHandler}
              label="Month"
            >
              {months_of_the_year.map((month) => (
                <MenuItem value={month}>{month}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6} md={3}>
          <TextField
            label="Year"
            variant="outlined"
            type="number"
            inputProps={{ min: 1800 }}
            required
            sx={{ width: "100%" }}
            value={endingYear}
            onBlur={endingYearBlurHandler}
            onChange={endingYearChangeHandler}
            error={endingYearHasError}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Checkbox
            value={stillEnrolledHere}
            onChange={(e) => setStillEnrolledHere(e.target.checked)}
          />
          <Typography sx={{ color: "#696969" }}>Still enrolled here</Typography>
        </Grid>
        <Grid item xs={0} md={6}></Grid>
        <Grid item xs={12} md={6}>
          <Button
            onClick={handleAdd}
            disabled={!validEducation}
            variant="contained"
            sx={{ backgroundColor: "#136533", width: "100%", height: "50px" }}
          >
            Add
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AddEducation;
