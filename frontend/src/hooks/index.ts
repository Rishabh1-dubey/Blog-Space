import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";

interface Blog {
  content: string;
  title: string;
  id: string;
  author: {
    name: string;
  };
}
export const useBlogs = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlog] = useState<Blog[]>([]);

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
        setBlog(response.data.blogs);
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
