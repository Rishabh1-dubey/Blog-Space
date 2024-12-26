import { Avatar } from "./BlogCard";
import blog from "../assets/blog.png";
import { Link } from "react-router-dom";
import { PiNotePencilLight } from "react-icons/pi";
const AppBar = () => {
 
  return (
    <div className="flex justify-between p-4 border-b border-slate-600 h-20 ">
      <div className="ml-12">
        <div className="">
          <Link className="cursor-pointer" to={"/blogs"}>
            <img className="h-20 absolute top-0 overflow-auto  " src={blog} />
          </Link>
        </div>
      </div>
      <div className="flex justify-between gap-4">
        <button
          type="button"
          className="text-white p-4  bg-slate-950  pt-3 font-medium    rounded-3xl text-base    transition-all delay-100 hover:cursor-pointer "
        >
          <Link to={"/signin"}>SignOut</Link>
        </button>
   
       
       <button
          type="button"
          className="rounded-xl text-base px-6 text-center me-2    delay-100 hover:cursor-pointer hover:text-black text-gray-600 "
        >
          <Link className="flex gap-2" to={"/publish"}>
            <PiNotePencilLight className="mt-0 text-2xl" />
          Write 
          </Link>
        </button>
        <div className="mr-12"></div>
        <div className="mr-12">
          <Avatar name="Rishabh" />
        </div>
      </div>
    </div>
  );
};

export default AppBar;
