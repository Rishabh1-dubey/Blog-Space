import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";

export interface Blog {
  id: string;
  title: string;
  content: string;
  createdAt:string
  author: {
    name: string;
  };
}
//this id for bulk blog
export const useBlogs = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/v1/blog/bulk`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          //here you defind Bearer in you auth app so you have to add bearer before sending the data into local strogae it is compulsory
        },
      })
      .then((response) => {
        setBlogs(response.data.blogs);
        // console.log(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error fetching blogs:", error);
        setLoading(false);
      });
    // console.log(localStorage.getItem("token"))
  }, []);

  return {
    blogs,
    loading,
  };
};

//this for single blog
export const useBlog = ({ id }: { id: string }) => {
  const [loading, setLoading] = useState(false);
  const [blog, setBlog] = useState<Blog>();

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/v1/blog/${id}`, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          //here you defind Bearer in you auth app so you have to add bearer before sending the data into local strogae it is compulsory
        },
      })
      .then((response) => {
        setBlog(response.data.blog);
        // console.log(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error fetching blogs:", error);
        setLoading(false);
      });
    // console.log(localStorage.getItem("token"))
  }, [id]);

  return {
    blog,
    loading,
  };
};
