import Link from "next/link";
import Typography from "@mui/material/Typography";
import SectionWrapper from "src/components/atoms/wrapperElements/sectionWrapper";
import { Module } from "src/components/templates/modulepicker";
import NotFoundPage from "pages/404";
import Fullpageloader from "src/components/atoms/actions/fullpageloader";
import Layout from "src/layout";
import { getTestData, getAllPosts } from "lib/api";
import { useRouter } from "next/router";

const Index = ({ pages = {}, footer = {} }) => {
  const { seo = {}, slug = "" } = pages;
  const router = useRouter();

  // const { data: revalidatedPages, error } = useGetPages({
  //   initialData: pages,
  //   slug: "index",
  // });

  // if (!router.isFallback && !pages) {
  //   return <NotFoundPage statusCode={404} />;
  // }

  // if (router.isFallback) {
  //   return <Fullpageloader />;
  // }

  // if (!router.isFallback && pages?.slug) {
  return (
    <>
      {Object.keys(seo).length !== 0 && <SeoHead seo={seo} slug={slug} />}
      <Layout footer={footer}>
        <Module
          moduleName={"hero"}
          //content={content}
        />
        <Module
          moduleName={"portfolio"}
          //content={content}
        />
        <Module
          moduleName={"infoBande"}
          //content={content}
        />
        <Module
          moduleName={"agreement"}
          //content={content}
        />
        <Module
          moduleName={"testimonial"}
          //content={content}
        />
        <Module
          moduleName={"conviction"}
          //content={content}
        />

        {/* {revalidatedPages.pageBuilder?.map(function (obj, index) {
          console.log({ ...Object.values(obj)[0] });
          //console.log("Module Name ist: ", Object.keys(obj)[0]);
          const content = { ...Object.values(obj)[0] };
          return (
            <Module
              moduleName={Object.keys(obj)[0]}
              onVariantChange={content}
              content={content}
            />
          );
        })} */}
      </Layout>
    </>
  );
  // }
};

export async function getStaticProps() {
  //you can delete getTestData
  const posts = await getTestData();
  // const testPostsAll = await getAllPosts(false, 0);
  // console.log("testPostsAll: ", testPostsAll);
  return {
    props: {
      posts,
    },
  };
}

export default Index;
