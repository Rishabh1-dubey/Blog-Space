import { useEffect } from "react";
import { useBlogs } from "../hooks";
import AppBar from "./AppBar";
import { BlogCard } from "./BlogCard";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";
import { Shimmer } from "./Shimmer";

const Blogs = () => {
  const navigate = useNavigate();
  const fetchBlogs = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/signin");
      return;
    }

    try {
      const response = await fetch(`${BACKEND_URL}/api/v1/blog/bulk`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (response.status === 403) {
        navigate("/signin"); // Token is invalid or user is not authorized
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const { loading, blogs } = useBlogs();
  // console.log(blogs)
  if (loading) {
    return (
      <div>
        {Array.from({ length: 6 }).map((_, index) => (
          <Shimmer key={index} />
        ))}
      </div>
    );
  }
  return (
    <div>
      <AppBar />
      <div className="flex justify-center mt-4">
        <div className=" max-w-xl">
          {blogs.map((blog, index) => (
            <BlogCard
              key={index}
              id={`${blog.id}`}
              authorName={blog.author.name || "Unknown"}
              title={blog.title}
              content={blog.content}
              publishedDate={"22 Dec 2024"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
