import { getPageData, getFooterData, getPostData } from "../../lib/api";

export default async function enablePreview(req, res) {
  // console.log("Das secret im backend ist: ", req.query.secret);
  // console.log("Der slug im backend ist: ", req.query.slug);
  // console.log("Der type im backend ist: ", req.query.type);

  //Check, if sanity secret and secret from nextJs is valid
  if (
    req.query.secret !== process.env.NEXT_PUBLIC_SANITY_PREVIEW_SECRET ||
    !req.query.slug
  ) {
    return res.status(404).json({ message: "Invalid token" });
  }

  //Je nach Type, welcher in den Searchparameter uebergeben wird
  if (req.query.type === "page") {
    //Revalidiere, ob der Slug für den Document Typ exestiert (hier z.B fuer Type page)
    const page = await getPageData(req.query.slug, true);

    if (!page) {
      return res.status(401).json({ message: "Invalid Slug!" });
    }

    res.setPreviewData({});
    res.writeHead(307, { Location: `/${page.slug}` });
    res.end();
  }

  if (req.query.type === "post") {
    //Revalidiere, ob der Slug für den Document Typ exestiert (hier z.B fuer Type page)
    const post = await getPostData(req.query.slug, true);

    if (!post) {
      return res.status(401).json({ message: "Invalid Slug!" });
    }

    res.setPreviewData({});
    res.writeHead(307, { Location: `/post/${post.slug}` });
    res.end();
  }
}
