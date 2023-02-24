import Box from "@mui/material/Box";
import HeroPicture from "public/detailExample.jpg";
import Image from "next/image";
import { urlFor } from "lib/sanity";

export default function heroPicture({ mainImage, title }) {
  return (
    <>
      <Box className="unset-img" sx={{ display: "flex" }}>
        <Box
          component={Image}
          src={mainImage != null ? urlFor(mainImage).url() : HeroPicture}
          alt={title}
          className="custom-img"
        />
      </Box>
    </>
  );
}
