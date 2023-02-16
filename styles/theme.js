import { createTheme } from "@mui/material/styles";

// Create a theme instance.
//typography: Base Scale 14px und Scale 1.2 theme.palette.primary.dark
const theme = createTheme({
  palette: {
    primary: {
      main: "#FFFF",
      light: "rgba( 255, 255, 255, 0.6 )",
      dark: "#FFF8F0",
    },
    secondary: {
      main: "#011640",
      light: "rgba(1,22,64, 0.7)",
    },
    tertiary: {
      main: "#E7ECEF",
      light: "rgba(231, 236, 239, 0.7)",
    },
    error: {
      main: "#AE4F4F",
    },
    text: {
      subtitleColor: "#3D3D3D",
    },
    borderColor: {
      main: "#DAD9CD",
      dark: "#292727",
    },
    text: {
      main: "#011640",
      secondary: "rgba(1,22,64, 0.7)",
      tertiary: "#FFF8F0",
      quaternary: "rgba( 255, 255, 255, 0.8 )",
    },
  },
  // typography: {
  //   //fontFamily: "'IBM Plex Mono', monospace",
  //   h1: {
  //     fontSize: "2.986rem",
  //   },
  //   h2: {
  //     fontSize: "2.488rem",
  //   },
  //   h3: {
  //     fontSize: "2.074rem",
  //   },
  //   h4: {
  //     fontSize: "1.728rem",
  //   },
  //   h5: {
  //     fontSize: "1.44rem",
  //   },
  //   h6: {
  //     fontSize: "1.2rem",
  //   },
  //   subtitle1: {
  //     fontSize: "1rem",
  //     lineHeight: "1.8rem",
  //   },
  //   subtitle2: {
  //     fontSize: "0.833rem",
  //   },
  //   body1: {
  //     fontSize: "1rem",
  //     lineHeight: "1.8rem",
  //   },
  //   body2: {
  //     fontSize: "0.833rem",
  //   },
  //   button: {
  //     fontSize: "0.833rem",
  //   },
  // }
});

export default theme;
