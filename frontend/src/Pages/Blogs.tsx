import { useBlogs } from "../hooks";
import AppBar from "./AppBar";
import { BlogCard } from "./BlogCard";

const Blogs = () => {
  const { loading, blogs } = useBlogs();
  // console.log(blogs)
  if (loading) {
    return <div>loading ........ //shimmer ui</div>;
  }
  return (
    <div>
      <AppBar />
      <div className="flex justify-center mt-4">
        <div className=" max-w-xl">
          {blogs.map((blog,index) => (
            <BlogCard
            key={index}
            id={`${blog.id}`}
            authorName={blog.author.name || "Unknown"}
            title={blog.title}
            content={blog.content}
            publishedDate={"9 Nov 2024"}
            />
          ))}
        </div>
      </div>
    </div>
    
  );
};

export default Blogs;
