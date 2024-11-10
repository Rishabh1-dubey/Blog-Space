const SingleShimmer = () => {
  return (
    <div>

    <div className="flex justify-center  ">
      <div className="grid grid-cols-12 px-10 w-full pt-12 max-w-screen-xl ">
        <div className="col-span-9   mt-16 animate-pulse">
          <div className="flex w-full flex-col gap-3 mt-12">
            <div className="w-[70%] font-extrabold bg-gray-300 h-6 rounded-xl"></div>
            <div>
              <div className=" w-[60%] h-4   bg-gray-300 rounded-2xl mt-6"></div>
            </div>
          </div>
        </div>

        <div className="col-span-3  mt-12  animate-pulse">
          <div className="flex w-full flex-col gap-3 mt-12">
            <div className="pr-4 flex flex-col justify-center w-12 h-12 rounded-full bg-gray-200"></div>
            <div>
              <div className="pt-2 bg-gray-200 h-4 rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
      <div className="ml-[135px] w-full max-w-md mx-auto animate-pulse p-9">
        <h1 className="h-2 bg-gray-300 rounded-lg w-52 dark:bg-gray-600"></h1>

        <p className="w-48 h-2 mt-6 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
        <p className="w-full h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
        <p className="w-64 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
        <p className="w-4/5 h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
      </div>
    </div>
  );
};

export default SingleShimmer;

// <div className="w-[70%] font-extrabold bg-gray-300  rounded-xl">
// dfdfgdfg
// </div>
// <div className=" w-[60%]  border bg-gray-300 rounded-2xl mt-6">
//    jjjh
// </div>
