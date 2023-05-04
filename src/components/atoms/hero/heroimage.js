import Box from "@mui/material/Box";
import HeroPicture from "public/unsplash_hintergrund_hero.jpg";
import Image from "next/image";
import { urlFor } from "lib/sanity";

export default function heroPicture({ mainImage, title }) {
  return (
    <>
      <Box className="unset-img" sx={{ display: "flex" }}>
        <Box
          component={Image}
          priority
          src={mainImage != null ? urlFor(mainImage).url() : HeroPicture.src}
          alt={title}
          fill
          sx={{
            objectFit: "cover",
            objectPosition: { xs: "right", md: "unset" },
          }}
        />
      </Box>
    </>
  );
}
