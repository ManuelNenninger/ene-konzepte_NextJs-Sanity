import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
//import Footer from "./organisms/footer"
import Appbar from "src/components/organisms/appbar";

export default function Layout(props) {
  const theme = useTheme();

  return (
    <>
      <Box
        id="main_BackgroundColor"
        sx={{ backgroundColor: theme.palette.primary.main }}
      >
        <Box
          id="main_Frame"
          sx={{
            maxWidth: "1680px",
            mx: "auto",
          }}
        >
          <Appbar>
            <main>{props.children}</main>
            {/*<Footer/>*/}
          </Appbar>
        </Box>
      </Box>
    </>
  );
}
