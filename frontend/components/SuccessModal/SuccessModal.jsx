import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import Link from "next/link";

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
  alignItems: "center",
  gap: "10px",
};

const SuccessModal = ({ visible, onClose }) => {
  return (
    <Modal
      open={visible}
      onClose={onClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={style}>
        <Typography variant='h1' id='modal-modal-title' component='h2'>
          🎈
        </Typography>
        <Typography
          variant='h5'
          id='modal-modal-description'
          sx={{ mt: 2, lineHeight: "1px" }}
        >
          Success!
        </Typography>
        <Typography
          variant='subtitle'
          id='modal-modal-description'
          sx={{ mt: 2, color: "#696969" }}
        >
          Your profile is successfully saved
        </Typography>
        <Link href='/'>
          <Button
            // onClick={onClose}
            sx={{ width: "100%", height: "50px" }}
            variant='contained'
          >
            Okay
          </Button>
        </Link>
      </Box>
    </Modal>
  );
};

export default SuccessModal;
