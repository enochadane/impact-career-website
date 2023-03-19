import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import { country_list } from "../../constants";

import { TagsInput } from "react-tag-input-component";

const BasicInfo = ({ props }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <TextField
          label="First Name"
          variant="outlined"
          required
          sx={{ width: "100%" }}
          value={props.firstName}
          onBlur={props.firstNameBlurHandler}
          onChange={props.firstNameChangeHandler}
          error={props.firstNameHasError}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          label="Last Name"
          variant="outlined"
          required
          sx={{ width: "100%" }}
          value={props.lastName}
          onBlur={props.lastNameBlurHandler}
          onChange={props.lastNameChangeHandler}
          error={props.lastNameHasError}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          label="Email"
          variant="outlined"
          required
          sx={{ width: "100%" }}
          value={props.email}
          onBlur={props.emailBlurHandler}
          onChange={props.emailChangeHandler}
          error={props.emailHasError}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          label="Mobile Number"
          variant="outlined"
          required
          sx={{ width: "100%" }}
          value={props.phone}
          onBlur={props.phoneBlurHandler}
          onChange={props.phoneChangeHandler}
          error={props.phoneHasError}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          label="Years of experience"
          variant="outlined"
          required
          type="number"
          sx={{ width: "100%" }}
          value={props.yearsOfExperience}
          onBlur={props.yearsOfExperienceBlurHandler}
          onChange={props.yearsOfExperienceChangeHandler}
          error={props.yearsOfExperienceHasError}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Country</InputLabel>
          <Select
            value={props.country}
            onChange={props.countryChangeHandler}
            label="Country"
          >
            {country_list.map((country) => (
              <MenuItem value={country}>{country}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={12}>
        <TagsInput
          value={props.skills}
          onChange={props.setSkills}
          name="Skills"
          placeHolder="Add Skills (use enter to add skill)"
          separators={["Enter"]}
        />
      </Grid>
    </Grid>
  );
};

export default BasicInfo;
