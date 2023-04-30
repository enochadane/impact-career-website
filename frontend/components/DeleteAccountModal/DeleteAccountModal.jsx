import axios from "axios";
import Box from "@mui/material/Box";
import LoadingButton from "@mui/lab/LoadingButton";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../../store/user";
import { useRouter } from "next/router";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 450,
  bgcolor: "background.paper",
  border: "1px solid #000",
  borderRadius: "5px",
  p: 4,
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};

const DeleteAccountModal = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleClose = async () => {
    const reqConfig = {
      method: "GET",
      url: `${process.env.SERVER}/candidate/account-deletion/${user.id}`,
    };

    const response = await axios(reqConfig);
    dispatch(userActions.deleteAccountModalHidden());
    dispatch(userActions.clearUserData());
    router.push("/");
  };

  return (
    <Modal
      open={user.deleteAccountModal}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={style}>
        <Typography variant='h5' id='modal-modal-title' component='h2'>
          ⚠️ Account Deletion Confirmation
        </Typography>
        <Typography
          sx={{ color: "#696969" }}
          variant='subtitle'
          id='modal-modal-description'
        >
          By clicking the confirmation button below, you acknowledge that you
          will receive an email and you are responsible for completing the final
          step to delete your account.
        </Typography>
        <LoadingButton
          onClick={handleClose}
          sx={{ width: "100%", height: "50px" }}
          color='warning'
          variant='contained'
        >
          Confirm
        </LoadingButton>
      </Box>
    </Modal>
  );
};

export default DeleteAccountModal;
