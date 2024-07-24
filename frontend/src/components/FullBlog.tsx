import { Blog } from "../hooks/fetchBlog"
import Appbar from "./Appbar"
import { Avatar } from "./BlogCard"


const FullBlog = ({ blog }: { blog: Blog }) => {
    return (
        <div>
            <Appbar />
            <div className="flex justify-center px-30  ">
                <div className="grid grid-cols-12 px-10 w-full pt-10  max-w-screen-xl">
                    <div className="col-span-8  px-4 ">
                        <div className="text-5xl font-extrabold ">
                            {blog.title}
                        </div>
                        <div className="text-slate-400 pt-2">
                            Posted on 23 July 2024
                        </div>
                        <div className="text-gray-700 pt-4">
                            {blog.description}
                        </div>
                    </div>
                    <div className="col-span-4 ">
                        <div className="text-slate-500 text-lg ">
                            Author
                        </div>
                        <div className="flex pt-1">
                            <div className="pr-3 flex justify-center flex-col">
                                <Avatar size="big" name={blog.author?.name || "Anonymous"} />
                            </div>
                            <div>
                                <div className="text-lg font-bold" >
                                    {blog.author?.name || "Anonymous"}
                                </div>
                                <div className="text-slate-500 pt-1">
                                    Lorem ipsum odor amet, consectetuer adipiscing elit. Ut porttitor ultricies eleifend velit mus? Integer torquent accumsan vehicula maximus vivamus.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FullBlog