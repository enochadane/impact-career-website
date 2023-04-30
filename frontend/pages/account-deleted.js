import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function AccountDeletedPage() {
  return (
    <div className='Banner'>
      <Box
        sx={{
          color: "black",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "55vh",
        }}
      >
        <Typography variant='h2'>Account deleted Successfully!</Typography>
        <Typography variant='subtitle2' sx={{ fontSize: "18px" }}>
          We're sorry to see you go. We hope you had a good experience with our
          services. Please feel free to come back anytime.
        </Typography>
      </Box>
    </div>
  );
}

export default AccountDeletedPage;
