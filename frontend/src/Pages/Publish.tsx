import { Link, useNavigate } from "react-router-dom";
import AppBar from "./AppBar";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useState } from "react";

export const Publish = () => {
  const [title, setTitle] = useState("");
  const [description, setDesciption] = useState("");
  const navigate = useNavigate();
  return (
    <div>
      <AppBar />
      <div className="  mx-auto mt-24 w-1/2">
        <input
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          className=" w-full p-3 mb-5 border rounded-lg placeholder:text-2xl placeholder:font-serif placeholder:font-extralight "
          type="text"
          placeholder="Title of your Blog"
        />
        <div className="">
          <textarea
            onChange={(e) => {
              setDesciption(e.target.value);
            }}
            rows={5}
            className="block p-2.5 w-full text-lg text-gray-700 bg-slate-50 border rounded-lg  placeholder:text-5xl placeholder:font-serif placeholder:font-thin  "
            placeholder="Content"
          ></textarea>
        </div>

        <div className="mt-8">
          <button
            onClick={async () => {
              const response = await axios.post(
                `${BACKEND_URL}/api/v1/blog`,
                {
                  title,
                  content: description,
                },
                {
                  method: "POST",
                  headers: {
                    Authorization: "Bearer " + localStorage.getItem("token"),
                  },
                }
              );
              navigate(`/blog/${response.data.id}`);
            }}
            type="submit"
            className="mt-4 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
          >
            Publish post
          </button>
        
        </div>
      </div>
    </div>
  );
};
