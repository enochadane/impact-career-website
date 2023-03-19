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

const AddWorkHistory = ({ setWorkHistory }) => {
  const {
    value: position,
    isValid: positionIsValid,
    hasError: positionHasError,
    valueChangeHandler: positionChangeHandler,
    inputBlurHandler: positionBlurHandler,
    reset: positionReset,
  } = useInput((s) => s !== "");

  const {
    value: company,
    isValid: companyIsValid,
    hasError: companyHasError,
    valueChangeHandler: companyChangeHandler,
    inputBlurHandler: companyBlurHandler,
    reset: companyReset,
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

  const {
    value: description,
    isValid: descriptionIsValid,
    hasError: descriptionHasError,
    valueChangeHandler: descriptionChangeHandler,
    inputBlurHandler: descriptionBlurHandler,
    reset: descriptionReset,
  } = useInput((s) => s !== "");

  const [stillWorkingHere, setStillWorkingHere] = useState(false);

  const validWork =
    positionIsValid &&
    companyIsValid &&
    startingMonthIsValid &&
    startingYearIsValid &&
    ((endingMonthIsValid && endingYearIsValid) ||
      stillWorkingHere !== undefined) &&
    descriptionIsValid;

  const resetFields = () => {
    positionReset();
    companyReset();
    startingMonthReset();
    startingYearReset();
    endingMonthReset();
    endingYearReset();
    descriptionReset();
    setStillWorkingHere(false);
  };

  const handleAdd = () => {
    if (validWork) {
      const work = {
        position,
        company,
        startingMonth,
        startingYear,
        endingMonth,
        endingYear,
        description,
        stillWorkingHere,
      };
      setWorkHistory((prev) => [work, ...prev]);
      resetFields();
    }
  };

  return (
    <Box
      sx={{ border: "1px solid #7F7F7F", borderRadius: "5px", padding: "15px" }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            label="Position / Role"
            variant="outlined"
            required
            sx={{ width: "100%" }}
            value={position}
            onBlur={positionBlurHandler}
            onChange={positionChangeHandler}
            error={positionHasError}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Company / Business"
            variant="outlined"
            required
            sx={{ width: "100%" }}
            value={company}
            onBlur={companyBlurHandler}
            onChange={companyChangeHandler}
            error={companyHasError}
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
            value={stillWorkingHere}
            onChange={(e) => setStillWorkingHere(e.target?.checked)}
          />
          <Typography sx={{ color: "#696969" }}>Still working here</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <TextField
            label="Description"
            variant="outlined"
            required
            multiline
            rows={2}
            sx={{ width: "100%" }}
            value={description}
            onBlur={descriptionBlurHandler}
            onChange={descriptionChangeHandler}
            error={descriptionHasError}
          />
        </Grid>
        <Grid item xs={0} md={6}></Grid>
        <Grid item xs={12} md={6}>
          <Button
            onClick={handleAdd}
            disabled={!validWork}
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

export default AddWorkHistory;
