import { Link } from "react-router-dom";

interface BlogCardProps {
  id:string,
  authorName: string;
  createdAt:string
  title: string;
  content: string;
  publishedDate?: string; // Optional if not all blogs have it

}
export const BlogCard = ({
id,
  authorName,
  title,
  content,
  createdAt,
  publishedDate ,
}: BlogCardProps) => {
  return <Link to={`/blog/${id}`}>

  <div className="p-4 border-b-2  border-slate-300 cursor-pointer">
      <div className="flex  ">
        <div className="flex justify-center flex-col      ">
          <Avatar name={authorName.toUpperCase()} />
        </div>
        <div className="font-serif pl-2  pt-2 p-2  ">
          {authorName}
        </div>
          <div className="pl-2 font-thin text-slate-500 text-center pt-2">{publishedDate}</div>
          <div className="pl-2 font-thin text-slate-500 text-center pt-2">{createdAt}</div>
         
          
      </div>


      <div className=" text-xl   font-bold mt-2">{title}</div>
      <div className=" font-extralight mt-1">{content.slice(0, 100) + "..."}</div>
      <div className="font-thin pt-2">{`${Math.ceil(content.length / 100)} mint`}</div>
      
    </div>
</Link>
  

};

export function Avatar({ name }: { name: string }) {
  return (
    <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-slate-400 rounded-full ">
      <span className="font-medium text-white ">{name[0].toUpperCase()}</span>
    </div>
  );
}
