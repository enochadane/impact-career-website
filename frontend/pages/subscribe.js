import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function SubscribeSuccessPage() {
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
        <Typography variant='h2'>
          Welcome back, you're subscribed again!
        </Typography>
        <Typography variant='subtitle2' sx={{ fontSize: "18px" }}>
          We're glad to have you back! We hope you'll enjoy our services once
          again.
        </Typography>
        <Typography variant='overline' sx={{ fontSize: "14px" }}>
          Remember, if you have any questions or concerns, don't hesitate to
          reach out to us. 😊
        </Typography>
      </Box>
    </div>
  );
}

export default SubscribeSuccessPage;
