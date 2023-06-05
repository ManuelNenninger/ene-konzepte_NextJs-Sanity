import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

import { useState } from "react";
import emailjs from "@emailjs/browser";
{
  /*
   * Diese Kontaktform funktioniert mit EmailJS
   * Erstell ein Konto und hinterlege in den ENV-FIles den Public-key, die Service-id und die template-id
   */
}

const StyledTextField = styled(TextField)(({ theme }) => ({
  label: {
    color: theme.palette.secondary.main,
  },
  input: {
    color: theme.palette.secondary.main,
  },
  fieldset: {
    borderColor: theme.palette.secondary.main,
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: theme.palette.secondary.main,
  },
  "& label.Mui-focused": {
    color: theme.palette.secondary.main,
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: theme.palette.secondary.main,
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.secondary.main,
    },
  },
}));

export default function MultilineTextFields() {
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openFailure, setOpenFailure] = useState(false);
  const [test, setTest] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  function sendEmail(formData) {
    return emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_YOUR_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_YOUR_TEMPLATE_ID,
      formData,
      process.env.NEXT_PUBLIC_EMAILJS_YOUR_PUBLIC_KEY
    );
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await sendEmail(formData);
      console.log("Email sent successfully");
      setOpenSuccess(true);
    } catch (err) {
      console.log(err);
      setOpenFailure(true);
    }
  };

  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSuccess(false);
    setOpenFailure(false);
  };

  return (
    <Box>
      <form
        // action="https://gmail.us17.list-manage.com/subscribe/post?u=400f776a9804292f43ee55016&amp;id=0d0ca739b4&amp;f_id=00c24fe0f0"
        onSubmit={handleSubmit}
        method="post"
        // id="mc-embedded-subscribe-form"
        // name="mc-embedded-subscribe-form"
        // class="validate"
        // target="_blank"
        novalidate
      >
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={5}
        >
          <Grid item sx={{ width: "100%" }}>
            <StyledTextField
              type="email"
              id="email"
              name="email"
              fullWidth
              required
              label="E-Mail"
              variant="standard"
              value={formData.email}
              onChange={handleChange}
            />{" "}
          </Grid>
          <Grid item sx={{ width: "100%" }}>
            <StyledTextField
              type="text"
              id="name"
              name="name"
              fullWidth
              label="Name"
              variant="standard"
              value={formData.name}
              onChange={handleChange}
            />{" "}
          </Grid>
          <Grid item sx={{ width: "100%" }}>
            <StyledTextField
              type="text"
              id="message"
              name="message"
              fullWidth
              label="Nachricht"
              placeholder="Hinterlass mir eine Nachricht."
              multiline
              variant="standard"
              value={formData.message}
              onChange={handleChange}
            />{" "}
          </Grid>{" "}
          <Grid item sx={{ width: "100%" }}>
            {/*Von MailChimp - Beginn*/}
            <div
              style={{ position: "absolute", left: "-5000px" }}
              aria-hidden="true"
            >
              <input
                type="text"
                name="b_ab9d1e66130232e185d989db3_76fa18e9e1"
                tabindex="-1"
                value=""
              />
            </div>
            {/*Von MailChimp - Ende*/}
            <Button
              color="secondary"
              value="Subscribe"
              name="subscribe"
              id="mc-embedded-subscribe"
              fullWidth
              type="submit"
              variant="contained"
              startIcon={<MarkunreadIcon />}
            >
              Send
            </Button>
          </Grid>
        </Grid>
      </form>
      <Snackbar
        open={openSuccess}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={handleClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          Nachricht erfolgreich übermittelt.
        </MuiAlert>
      </Snackbar>
      <Snackbar
        open={openFailure}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={handleClose}
          severity="error"
          sx={{ width: "100%" }}
        >
          Leider gab es einen Fehler beim senden der Nachricht.
        </MuiAlert>
      </Snackbar>
    </Box>
  );
}
