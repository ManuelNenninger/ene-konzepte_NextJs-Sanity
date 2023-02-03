import Link from "next/link";
import Typography from "@mui/material/Typography";
import SectionWrapper from "src/components/atoms/wrapperElements/sectionWrapper";
import NotFoundPage from "pages/404";
import Fullpageloader from "src/components/atoms/actions/fullpageloader";
import { getTestData } from "lib/api";
import { useRouter } from "next/router";

const Index = ({ posts }) => {
  const router = useRouter();

  // const { data: revalidatedPages, error } = useGetPages({
  //   initialData: pages,
  //   slug: "index",
  // });

  if (!router.isFallback && !posts) {
    return <NotFoundPage statusCode={404} />;
  }

  if (router.isFallback) {
    return <Fullpageloader />;
  }

  return (
    <SectionWrapper fullDistanceTop fullViewHeight>
      <Typography variant="h1" gutterBottom>
        Welcome to a blog!
      </Typography>

      {posts.length > 0 &&
        posts.map(
          ({ _id, title = "", slug = "", publishedAt = "" }) =>
            slug && (
              <li key={_id}>
                <Link href="/post/[slug]" as={`/post/${slug.current}`}>
                  {title}
                </Link>{" "}
                ({new Date(publishedAt).toDateString()})
              </li>
            )
        )}
    </SectionWrapper>
  );
};

export async function getStaticProps() {
  //you can delete getTestData
  const posts = await getTestData();

  return {
    props: {
      posts,
    },
  };
}

export default Index;
