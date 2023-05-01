import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { urlFor } from "lib/sanity";

import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(0),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(0),
  },
}));

// export interface DialogTitleProps {
//   id: string;
//   children?: React.ReactNode;
//   onClose: () => void;
// }

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

export default function ActionAreaCard({ imgPath, caption, asset }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const matches = useMediaQuery(theme.breakpoints.up("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
        sx={{ pr: { xs: 0, md: 5 } }}
      >
        <Card
          sx={{
            width: "100%",
            boxShadow: "none",
            borderRadius: 0,
          }}
        >
          <CardActionArea onClick={handleClickOpen}>
            <CardMedia
              component="img"
              height={matches ? 500 : 400}
              image={asset != null ? urlFor(asset).url() : imgPath}
              alt={caption}
            />
          </CardActionArea>
        </Card>
      </Grid>
      {/*Hier ein Costume Dialog PopUp, um das Bild einzeln zu betrachten */}
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullWidth={matches && true}
        fullScreen={!matches && true}
        maxWidth="lg"
        scroll="body"
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          <Typography variant="h4" component="span" sx={{ fontWeight: 300 }}>
            {caption}
          </Typography>
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Card sx={{ maxWidth: "100%", boxShadow: "none", borderRadius: 0 }}>
            <CardActionArea onClick={handleClose}>
              <CardMedia
                component="img"
                height={matches ? 700 : "100%"}
                image={asset != null ? urlFor(asset).url() : imgPath}
                alt={caption}
              />
            </CardActionArea>
          </Card>
        </DialogContent>
      </BootstrapDialog>
    </>
  );
}
