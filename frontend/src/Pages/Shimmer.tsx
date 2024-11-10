import React from "react";

export const Shimmer: React.FC = () => {
  return (
    <div className=" w-full max-w-2xl mx-auto animate-pulse p-4 ">
      <div className="">
        <div className="flex mt-6 gap-7">
          <div className="w-12 h-12 rounded-full bg-gray-200"></div>
          <p className="w-64 h-2 mt-6 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
        </div>
        <p className="ml-3 w-[320px] h-4 mt-6 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
        <p className="ml-3 w-4/5 h-3 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
      </div>
    </div>
  );
};

export const ShimmerList: React.FC = () => {
  return (
    <div>
      {Array.from({ length: 6 }).map((_, index) => (
        <Shimmer key={index} />
      ))}
    </div>
  );
};


//make shimmer effect