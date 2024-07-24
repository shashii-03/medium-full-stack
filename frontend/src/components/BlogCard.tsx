import { Link } from "react-router-dom"

interface BlogCardType {
    authorName: string,
    title: string,
    content: string,
    publishedDate: string,
    id: number
}

export default function BlogCard({
    id,
    authorName,
    title,
    content,
    publishedDate,
}: BlogCardType) {
    return <Link to={`/blog/${id}`}>
        <div className="p-4 border-b pb-4 w-screen max-w-screen-lg cursor-pointer">
            <div className="flex">
                <div className="">
                    <Avatar name={authorName} size="small" />

                </div>
                <div className="font-extralight pl-2 flex justify-center flex-col">
                    {authorName}
                </div>
                <div className="font-bold flex justify-center flex-col pl-2 ">
                    <Circle />
                </div>
                <div className="font-thin text-slate-400 pl-2 flex justify-center flex-col">
                    {publishedDate}

                </div>
            </div>
            <div className="text-xl font-bold mt-3 mb-1">
                {title}
            </div>
            <div className="font-thin text-lg text-slate-800 ">
                {content.slice(0, 200) + "...."}
            </div>
            <div className="mt-2 text-slate-400 font-extralight">
                {`${Math.ceil(content.length / 100)} minute(s) read`}
            </div>

        </div>
    </Link>
}


function Circle() {
    return <div className="h-1 w-1 rounded-full bg-slate-400"></div>
}

export function Avatar({ name, size }: { name: string, size?: "small" | "big" }) {
    return <div className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-100 rounded-full dark:bg-gray-800 ${size === "small" ? "w-6 h-6" : "w-10 h-10"}`}>
        <span className={`font-medium text-gray-600 dark:text-gray-300 ${size === "small" ? "text-xs" : "text-md"}`}>{name[0]} </span>
    </div>
}
