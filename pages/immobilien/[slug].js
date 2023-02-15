import client from "client";
import { Module } from "src/components/templates/modulepicker";
import Layout from "src/layout";
import SeoHead from "src/components/seo/seohead";
import NotFoundPage from "pages/404";
import Fullpageloader from "src/components/atoms/actions/fullpageloader";
import { useRouter } from "next/router";
import { getFooterData, getPostData } from "lib/api";
import PreviewAlert from "src/components/atoms/actions/previewalert";

const Post = ({ post = {}, footer = {}, preview = false }) => {
  const router = useRouter();

  // const { data: revalidatedPages, error } = useGetPages({
  //   initialData: pages,
  //   slug: pages?.slug,
  //   preview: preview,
  // });

  if (!router.isFallback && !post?.slug) {
    return <NotFoundPage statusCode={404} />;
  }

  if (router.isFallback) {
    return <Fullpageloader />;
  }

  if (!router.isFallback && post?.slug) {
    return (
      <>
        {/* {Object.keys(seo).length !== 0 && <SeoHead seo={seo} slug={slug} />} */}
        <Layout footer={footer != null ? footer : undefined}>
          {preview && <PreviewAlert />}
          <Module
            moduleName={"hero"}
            //content={content}
          />
          <Module
            moduleName={"specification"}
            //content={content}
          />
          <Module
            moduleName={"imageCarousel"}
            //content={content}
          />
          <Module
            moduleName={"detailedDescribtion"}
            //content={content}
          />
          <Module
            moduleName={"conviction"}
            //content={content}
          />
        </Layout>
      </>
    );
  }
};

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type == "post" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { slug = "" } = context.params;
  const { preview = false, previewData } = context;
  const post = await getPostData(slug, preview);
  const footer = await getFooterData();

  return {
    props: {
      post,
      footer,
      preview,
    },
    revalidate: process.env.SANITY_REVALIDATE_SECRET
      ? parseInt(process.env.SANITY_REVALIDATE_SECRET)
      : parseInt(86400),
  };
}

export default Post;
