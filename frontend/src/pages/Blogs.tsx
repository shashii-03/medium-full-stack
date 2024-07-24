import Appbar from "../components/Appbar"
import BlogCard from "../components/BlogCard"
import Skeleton from "../components/Skeleton"
import { useBlogs } from "../hooks/fetchBlog"


const Blogs = () => {
    const { loading, blogs } = useBlogs()
    if (loading) {
        return <div className="flex justify-center">
            <div>
                <Appbar />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
            </div>
        </div>
    }
    return (
        <div>
            <Appbar />
            <div className="flex justify-center">

                <div className=" ">
                    {blogs.map(blog =>
                        <BlogCard
                            id={blog.id}
                            title={blog.title}
                            content={blog.description}
                            authorName={blog.author.name || "Anonymous"}
                            publishedDate="23 July 2024"
                        />
                    )}
                </div>
            </div>
        </div>
    )
}

export default Blogs

