import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import ActionButton from "src/components/atoms/buttons/actionButton";
import EmailSubscribtion from "src/components/atoms/dialogPopUp/eMailSubscribtionForm";
import Grid from "@mui/material/Grid";
import ContactForm from "src/components/atoms/dialogPopUp/contactform";

export default function DialogOrder({ open, handleClose, order }) {
  const theme = useTheme();

  return (
    <>
      <Dialog
        open={open}
        //TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <Box sx={{ backgroundColor: theme.palette.primary.main, p: 4 }}>
          <DialogTitle color="text.primary">{"Say Hello"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              <Typography variant="body1" color="text.primary">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </Typography>
              <Typography variant="body1" color="text.primary">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat,
              </Typography>
              <Typography variant="body1" color="text.primary">
                At vero eos et accusam et justo duo dolores et ea rebum. Stet
                clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                dolor sit amet.
              </Typography>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item sx={{ width: "100%" }}>
                <ContactForm />
              </Grid>
            </Grid>
          </DialogActions>
        </Box>
      </Dialog>
    </>
  );
}
