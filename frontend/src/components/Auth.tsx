import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignupType } from "@rishabh123/blog-space";
import axios from "axios";
import { BACKEND_URL } from "../config";
import {  Bounce, toast } from 'react-toastify';


export const Auth = ({ type }: { type: "signup" | "signin" }) => {


  //alert logic ----


  const navigate = useNavigate();

  const [postInputs, setpostInputs] = useState<SignupType>({
    email: "",
    password: "",
    name: ""
  });

  async function sendRequest() {
    try {
      const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type == "signup" ? "signup" : "signin"}`, postInputs);
      const {jwt} = response.data;
      localStorage.setItem("token", jwt);
      console.log(response.data)
      toast.success('Welcome to blog-Space', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
      navigate("/blogs");
      
    } catch (error: any) {
      console.error("Error:", error || error.message);
      toast.error('Invalid Credentials', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });

    }
  }
  return (
    <div className=" w-screen grid  grid-cols-1 md:grid-cols-2">
      <div className=" mt-24 sm:h-[500px]   ">
        <div className="m-24   h-[360px] sm:w-[400px] lg:w-[400px]  mx-auto sm:mx-auto ">
          <div className=" text-center pr-6   ">
            <h1 className="text-3xl font-semibold tracking-wide ">
              Create and Account
            </h1>
            <div className="mt-1  ">
              {type === "signin"
                ? "Don't Have an Account?"
                : " Already have an account? "}
              <Link
                className="text-slate-600 underline   leading-loose pl-1 hover:text-blue-600 "
                to={type === "signin" ? "/signup" : "/signin "}
              >
                {type === "signin" ? "signup" : "signin"}
              </Link>
            </div>
          </div>
          {/* --------------------------- lablled input ---------------------- */}
          <div className="mt-4">
            {type === "signup" && (
              <LabelledInput
                label="Name"
                placeholder="John"
                onChange={(e) => {
                  setpostInputs({ ...postInputs, name: e.target.value });
                }}
              />
            )}
            <LabelledInput
              label="Email address"
              placeholder="john.doe@company.com"
              onChange={(e) => {
                setpostInputs({ ...postInputs, email: e.target.value });
              }}
            />{" "}
            <LabelledInput
              label="Password"
              type={"password"}
              placeholder="•••••••••"
              onChange={(e) => {
                setpostInputs({ ...postInputs, password: e.target.value });
              }}
            />
            <button
              type="button"
              onClick={sendRequest}
              className="w-full text-white bg-gray-800  focus:outline-none   font-medium rounded-lg text-sm px-5 py-2.5 me-2 mt-6 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              {type === "signup" ? "Sign up" : "Sign in"}
            </button>
          </div>
          {/* ------------------------------------------------------------------- */}
        </div>
      </div>
    </div>
  );
};

interface labelledInputProps {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

function LabelledInput({
  label,
  placeholder,
  onChange,
  type,
}: labelledInputProps) {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-900  pt-6 sm:pt-4 lg:pt-4">
        {label}
      </label>
      <input
        onChange={onChange}
        type={type || "text"}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg   block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        required
      />
    </div>
  );
}
