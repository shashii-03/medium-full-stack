

const Skeleton = () => {
    return (
        <div>

            <div className="p-4 border-b pb-4 w-screen max-w-screen-lg cursor-pointer">
                <div className="flex">
                    <div className="">
                        <div className="h-2.5 bg-gray-200 rounded-full  w-48 mb-4"></div>


                    </div>
                    <div className="font-extralight pl-2 flex justify-center flex-col">
                        <div className="h-2.5 bg-gray-200 rounded-full  w-48 mb-4"></div>

                    </div>
                    <div className="font-bold flex justify-center flex-col pl-2 ">
                        <div className="h-2.5 bg-gray-200 rounded-full  w-48 mb-4"></div>

                    </div>
                    <div className="font-thin text-slate-400 pl-2 flex justify-center flex-col">
                        <div className="h-2.5 bg-gray-200 rounded-full  w-48 mb-4"></div>


                    </div>
                </div>
                <div className="text-xl font-bold mt-3 mb-1">
                    <div className="h-2.5 bg-gray-200 rounded-full  w-48 mb-4"></div>

                </div>
                <div className="font-thin text-lg text-slate-800 ">
                    <div className="h-2.5 bg-gray-200 rounded-full  w-48 mb-4"></div>

                </div>
                <div className="mt-2 text-slate-400 font-extralight">
                    <div className="h-2.5 bg-gray-200 rounded-full  w-48 mb-4"></div>

                </div>

            </div>

            {/* <div role="status" className="max-w-sm animate-pulse">
                <div className="h-2.5 bg-gray-200 rounded-full  w-48 mb-4"></div>
                <div className="h-2 bg-gray-200 rounded-full  max-w-[360px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full  mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full  max-w-[330px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full  max-w-[300px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full  max-w-[360px]"></div>
                <span className="sr-only">Loading...</span>
            </div> */}


        </div>
    )
}

export default Skeleton