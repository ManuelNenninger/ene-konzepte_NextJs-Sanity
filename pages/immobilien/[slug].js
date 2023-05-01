import client from "client";
import { Module } from "src/components/templates/modulepicker";
import Layout from "src/layout";
import SeoHead from "src/components/seo/seohead";
import NotFoundPage from "pages/404";
import Fullpageloader from "src/components/atoms/actions/fullpageloader";
import { useRouter } from "next/router";
import { getFooterData, getPostData, getInseratData } from "lib/api";
import PreviewAlert from "src/components/atoms/actions/previewalert";

const Inserat = ({ inserat, footer, preview = false }) => {
  const {
    title = "Außergewöhnliches Design. Herausragender Service",
    describtion = "Munich based Real Estate",
    mainImage = null,
  } = inserat?.heroSection != null ? inserat?.heroSection : {};

  const seo = {
    metaTitle: title,
    metaDesc: describtion,
    shareTitle: describtion,
    shareGraphic: mainImage,
  };

  const DefauldContentHero = {
    title: "Lorem Haus am Rande Münchens",
    describtion: "München, Neuhausen Musterstrasse 2",
    mainImage: null,
  };

  const router = useRouter();

  // const { data: revalidatedPages, error } = useGetPages({
  //   initialData: pages,
  //   slug: pages?.slug,
  //   preview: preview,
  // });

  if (!router.isFallback && !inserat?.slug) {
    return <NotFoundPage statusCode={404} />;
  }

  if (router.isFallback) {
    return <Fullpageloader />;
  }

  if (!router.isFallback && inserat?.slug) {
    return (
      <>
        {seo != null && <SeoHead seo={seo} slug={inserat?.slug} />}
        <Layout footer={footer != null ? footer : undefined}>
          {preview && <PreviewAlert />}
          <Module
            moduleName={"hero"}
            content={
              inserat?.heroSection != null
                ? { ...inserat?.heroSection, darkBackgroundColor: false }
                : { ...DefauldContentHero, darkBackgroundColor: false }
            }
          />
          <Module
            moduleName={"specification"}
            content={inserat?.specification}
          />
          {inserat.pageBuilder?.map(function (obj, index) {
            //console.log({ ...Object.values(obj)[0] });
            //console.log("Module Name ist: ", Object.keys(obj)[0]);
            const content = { ...Object.values(obj)[0] };
            return (
              <Module moduleName={Object.keys(obj)[0]} content={content} />
            );
          })}
        </Layout>
      </>
    );
  }
};

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type == "inserat" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { slug = "" } = context.params;
  const { preview = false, previewData } = context;
  const footer = await getFooterData();
  const inserat = await getInseratData(slug, preview);

  return {
    props: {
      inserat,
      footer,
      preview,
    },
    revalidate: process.env.SANITY_REVALIDATE_SECRET
      ? parseInt(process.env.SANITY_REVALIDATE_SECRET)
      : parseInt(86400),
  };
}

export default Inserat;
