import { getAllPosts } from "../../lib/api";

export default async function blogRequestAPI(req, res) {
  const { offset = 0, preview = false } = req.body;

  const posts = await getAllPosts(false, offset);
  res.status(200).json(posts);
}
