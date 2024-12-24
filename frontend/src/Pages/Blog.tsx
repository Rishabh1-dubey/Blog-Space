import { useParams } from "react-router-dom";
import { useBlog } from "../hooks";
import { SingleBlog } from "../components/SingleBlog";
import SingleShimmer from "./SingleShimmer";

export const Blog = () => {
  const { id } = useParams();
  const { loading, blog } = useBlog({
    id: id || " ",
  });
  if (loading || !blog) {
    return <div><SingleShimmer/></div>;
  }
  return (
    <div>
      <SingleBlog blog ={blog} />
    </div>
  );
};
