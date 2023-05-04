import { Module } from "src/components/templates/modulepicker";
import NotFoundPage from "pages/404";
import Fullpageloader from "src/components/atoms/actions/fullpageloader";
import Layout from "src/layout";
import { getIndexPageData, getFooterData } from "lib/api";
import { useGetPages } from "src/components/atoms/fetcher/fetch";
import { useRouter } from "next/router";
import SeoHead from "src/components/seo/seohead";

const Index = ({ pages = {}, footer = {} }) => {
  const { seo = {}, slug = "" } = pages;
  const router = useRouter();

  const { data: revalidatedPages, error } = useGetPages({
    initialData: pages,
    slug: "index",
    preview: false,
  });
  //Solange in bearbeitung
  return <NotFoundPage statusCode={404} />;

  if (!router.isFallback && !pages) {
    return <NotFoundPage statusCode={404} />;
  }

  if (router.isFallback) {
    return <Fullpageloader />;
  }

  if (!router.isFallback && pages?.slug) {
    return (
      <>
        {Object.keys(seo).length !== 0 && <SeoHead seo={seo} slug={slug} />}
        <Layout footer={footer}>
          {revalidatedPages?.pageBuilder?.map(function (obj, index) {
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

export async function getStaticProps() {
  //you can delete getTestData
  const pages = await getIndexPageData();
  const footer = await getFooterData();
  return {
    props: {
      pages,
      footer,
    },
  };
}

export default Index;
