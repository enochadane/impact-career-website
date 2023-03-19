import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

import useInput from "../../hooks/use-input";

const AddCertifications = ({ setCertifications }) => {
  const {
    value: certification,
    isValid: certificationIsValid,
    hasError: certificationHasError,
    valueChangeHandler: certificationChangeHandler,
    inputBlurHandler: certificationBlurHandler,
    reset: certificationReset,
  } = useInput((s) => s !== "");

  const {
    value: year,
    isValid: yearIsValid,
    hasError: yearHasError,
    valueChangeHandler: yearChangeHandler,
    inputBlurHandler: yearBlurHandler,
    reset: yearReset,
  } = useInput((s) => s !== "" && +s > 1800);

  const validCertification = certificationIsValid && yearIsValid;

  const resetFields = () => {
    certificationReset();
    yearReset();
  };

  const handleAdd = () => {
    console.log("A");
    if (validCertification) {
      console.log("B");
      const certificate = {
        name: certification,
        year,
      };

      setCertifications((prev) => [certificate, ...prev]);
      resetFields();
    }
  };

  return (
    <Box
      sx={{ border: "1px solid #7F7F7F", borderRadius: "5px", padding: "15px" }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <TextField
            label="Certification or award"
            variant="outlined"
            required
            sx={{ width: "100%" }}
            value={certification}
            onBlur={certificationBlurHandler}
            onChange={certificationChangeHandler}
            error={certificationHasError}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            label="Year"
            variant="outlined"
            type="number"
            inputProps={{ min: 1800 }}
            required
            sx={{ width: "100%" }}
            value={year}
            onBlur={yearBlurHandler}
            onChange={yearChangeHandler}
            error={yearHasError}
          />
        </Grid>
        <Grid item xs={0} md={6}></Grid>
        <Grid item xs={12} md={6}>
          <Button
            onClick={handleAdd}
            disabled={!validCertification}
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

export default AddCertifications;
