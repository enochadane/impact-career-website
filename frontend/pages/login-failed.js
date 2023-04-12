import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function LoginFailed() {
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
        <Typography variant='h2'>Login Failed!</Typography>
        <Typography variant='subtitle2' sx={{ fontSize: "18px" }}>
          We're sorry, but the link you used to login is invalid or has expired.
          Please make sure you are using the correct link and try again.
        </Typography>
        <Typography variant='overline' sx={{ fontSize: "14px" }}>
          If you continue to have issues, please contact our support team for
          assistance. We hope to see you back on the platform soon!
        </Typography>
      </Box>
    </div>
  );
}

export default LoginFailed;
