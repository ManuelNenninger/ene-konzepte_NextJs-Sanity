import { NextSeo } from "next-seo";
import { urlFor } from "../../../lib/sanity";
import Head from "next/head";

export default function SeoComponent({ seo = {}, slug }) {
  const {
    metaTitle = "",
    shareTitle = "",
    metaDesc = "",
    shareDesc = "",
    shareGraphic,
  } = seo;

  let origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";
  const shareGraphicURL = shareGraphic
    ? urlFor(shareGraphic)?.url()
    : undefined;
  let url =
    slug == "index"
      ? "https://www.ene-konzepte.de/"
      : "https://www.ene-konzepte.de/" + slug;

  return (
    <>
      <NextSeo
        title={metaTitle}
        description={metaDesc}
        canonical={url}
        type="Website"
        openGraph={{
          url: url,
          title: shareTitle,
          description: shareDesc,
          images:
            shareGraphic !== null
              ? [
                  {
                    url: shareGraphicURL,
                    width: 800,
                    height: 600,
                    alt: metaTitle,
                    type: "image/jpeg",
                  },
                  {
                    url: shareGraphicURL,
                    width: 900,
                    height: 800,
                    alt: metaTitle,
                    type: "image/jpeg",
                  },
                  { url: shareGraphicURL },
                  { url: shareGraphicURL },
                ]
              : undefined,
          siteName: url,
          type: "website",
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
    </>
  );
}
