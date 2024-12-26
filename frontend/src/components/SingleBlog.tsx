
import { IoArrowBackOutline } from "react-icons/io5";
import { Blog } from "../hooks";
import AppBar from "../Pages/AppBar";
import { Avatar } from "../Pages/BlogCard";
import SingleShimmer from "../Pages/SingleShimmer";
import { useNavigate } from "react-router-dom";



export const SingleBlog = ({ blog }: { blog: Blog }) => {
   
    const navigate = useNavigate()
    if(!blog)
        return <SingleShimmer/>
    const currentDate = new Date().toLocaleDateString("en-IN", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });
  return (
    <div>
    <AppBar />
     <IoArrowBackOutline onClick={()=>navigate("/blogs")} className=" relative top-6 text-4xl ml-44  hover:text-gray-900 cursor-pointer text-gray-500"
          />
    <div className="flex justify-center ">
        <div className="grid grid-cols-12 px-10 w-full pt-12 max-w-screen-xl">
            <div className="col-span-8">
                <div className="text-5xl font-extrabold">
                    {blog?.title}
                </div>
                <div className="text-slate-500 pt-2">
               Date: {currentDate}
                </div>
                <div className="pt-4">
                    {blog?.content}
                </div>
            </div>
            <div className="col-span-4 ">
                <div className="text-slate-600 text-lg ml-14">
                    Author
                </div>
                <div className="flex w-full">
                    <div className="pr-4 flex flex-col justify-center">
                        <Avatar name={blog?.author.name || "Anonymous"} />
                    </div>
                    <div>
                        <div className="text-xl font-bold">
                            {blog?.author.name || "Anonymous"}
                        </div>
                        <div className="pt-2 text-slat-500">
                        Author | Stoyteller | Student
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
  );
};
