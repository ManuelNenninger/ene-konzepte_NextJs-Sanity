import Box from "@mui/material/Box";
import HeroPicture from "public/Bild.jpg";
import Image from "next/image";

export default function heroPicture({ mainImage = {} }) {
  return (
    <>
      <Box className="unset-img" sx={{}}>
        <Image
          src={HeroPicture}
          alt="Flowers in Chania"
          className="custom-img"
        />
      </Box>
    </>
  );
}
