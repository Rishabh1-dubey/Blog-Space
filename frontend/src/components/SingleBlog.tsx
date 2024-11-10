
import { Blog } from "../hooks";
import AppBar from "../Pages/AppBar";
import { Avatar } from "../Pages/BlogCard";
import SingleShimmer from "../Pages/SingleShimmer";



export const SingleBlog = ({ blog }: { blog: Blog }) => {
   
    if(!blog)
        return <SingleShimmer/>
  return (
    <div>
    <AppBar />
    <div className="flex justify-center ">
        <div className="grid grid-cols-12 px-10 w-full pt-12 max-w-screen-xl">
            <div className="col-span-8">
                <div className="text-5xl font-extrabold">
                    {blog?.title}
                </div>
                <div className="text-slate-500 pt-2">
                    10Nov 2024
                </div>
                <div className="pt-4">
                    {blog?.content}
                </div>
            </div>
            <div className="col-span-4 ">
                <div className="text-slate-600 text-lg">
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quia qui illo debitis explicabo inventore nam veritatis autem sequi exercitationem.
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>
  );
};
