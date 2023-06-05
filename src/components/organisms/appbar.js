import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import ActionButton from "../atoms/buttons/actionButton";
import SubscribeDialogPopUp from "../atoms/dialogPopUp/subscribeDialogPopUp";
import Link from "next/link";
import { useAppContext } from "src/appContext";

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const drawerWidth = 240;
//Hier sollten die Button definiert werden, für die unterseiten.
const navItems = [
  { buttonName: "Impressum", href: "/impressum" },
  { buttonName: "Touren", href: "/touren" },
];

export default function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  // const [open, setOpen] = React.useState(false);
  const { states, setStates } = useAppContext();
  const { content = {} } = props;
  const { brandName = "Brand", dialogPopUp } = content;

  const handleClickOpen = () => {
    setStates.dialogComponente(true);
    //setOpen(true);
  };

  const handleClose = () => {
    setStates.dialogComponente(false);
    //setOpen(false);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Link href="/">
        <Typography variant="h6" sx={{ my: 2 }}>
          {brandName}
        </Typography>
      </Link>
      <Divider />
      <List>
        {navItems.map((item, index) => (
          <ListItem key={"mobile_appbar_button" + index} disablePadding>
            <Link href={item.href}>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item.buttonName} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const NavigationButtons = ({ buttonName, href, index }) => {
    return (
      <>
        <Button variant="text" key={"appbarbutton_" + index} sx={{ mr: 10 }}>
          <Typography variant="button" color="text.primary">
            <Link href={href ? href : "/"}> {buttonName}</Link>
          </Typography>
        </Button>
      </>
    );
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <ElevationScroll {...props}>
        <AppBar component="nav">
          <Toolbar sx={{ px: { xs: 1, md: 10 } }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            {/*Damit Der Icon Button und der CTA in Mobile richtig ausgerichtet sind */}
            <Box
              component="div"
              sx={{ flexGrow: 1, display: { sm: "none" } }}
            />
            <Typography
              variant="h4"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              <Link href="/">{brandName}</Link>
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.length !== 0 &&
                navItems.map((item, index) => (
                  <NavigationButtons
                    {...item}
                    index={index}
                    key={"Appbar_NAV_Button_" + index}
                  />
                ))}
            </Box>
            <Box>
              <ActionButton
                variant="contained"
                text={"Jetzt buchen"}
                onClick={handleClickOpen}
              />
            </Box>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main">
        <Toolbar />
        {props.children}
        <SubscribeDialogPopUp
          content={dialogPopUp}
          open={states.dialogComponente}
          handleClose={handleClose}
        />
      </Box>
    </Box>
  );
}
