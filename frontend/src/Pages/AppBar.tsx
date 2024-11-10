import { Avatar } from "./BlogCard";
import blog from "../assets/blog.png";
import { Link } from "react-router-dom";

const AppBar = () => {
  return (
    <div className="flex justify-between p-4 border-b border-slate-600 h-20">
      <div className="ml-12">
        <div className="">
          <Link className="cursor-pointer" to={"/blogs"}>
            <img className="h-20 absolute top-0 overflow-auto  " src={blog} />
          </Link>
        </div>
      </div>
      <div className="flex justify-between gap-8">
        <button
          type="button"
          className="text-black  bg-orange-200    rounded-xl text-base px-6  text-center me-2   transition-all delay-100 hover:cursor-pointer shadow-xl"
        >
          <Link to={"/sign"}>SignOut</Link>
        </button>{" "}
        <button
          type="button"
          className="text-black  bg-slate-400  rounded-xl text-base px-6 text-center me-2    delay-100 hover:cursor-pointer shadow-xl hover:shadow-red-300 "
        >
          <Link to={"/publish"}>Create</Link>
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
