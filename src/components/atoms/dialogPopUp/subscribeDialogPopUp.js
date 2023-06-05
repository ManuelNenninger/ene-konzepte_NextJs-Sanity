import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ContactForm from "src/components/atoms/dialogPopUp/contactFormEMAILJS";

export default function DialogOrder({ open, handleClose, order, content }) {
  const theme = useTheme();
  const { title = "Say Hello", describtion } = content != null ? content : {};
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
          <DialogTitle color="text.primary">{title}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              {describtion != null ? (
                <Typography variant="body1" color="text.primary">
                  {describtion}
                </Typography>
              ) : (
                <Typography variant="body1" color="text.primary">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua.
                </Typography>
              )}
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
