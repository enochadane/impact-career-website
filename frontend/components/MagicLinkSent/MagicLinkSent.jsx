import Box from "@mui/material/Box";
import LoadingButton from "@mui/lab/LoadingButton";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import EmailIcon from "@mui/icons-material/Email";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../../store/user";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid #000",
  borderRadius: "5px",
  p: 4,
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};

const MagicLinkSent = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(userActions.magicLinkSentModalHidden());
  };

  return (
    <Modal
      open={user.magicLinkSent}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={style}>
        <Typography variant='h5' id='modal-modal-title' component='h2'>
          <EmailIcon sx={{ color: "#136533", fontSize: "2rem" }} /> Magic link
          sent!
        </Typography>
        <Typography
          sx={{ color: "#696969" }}
          variant='subtitle'
          id='modal-modal-description'
        >
          Check your email to securely login.
        </Typography>
        <LoadingButton
          onClick={handleClose}
          sx={{ width: "100%", height: "50px" }}
          variant='contained'
        >
          Okay
        </LoadingButton>
      </Box>
    </Modal>
  );
};

export default MagicLinkSent;
