import { useEffect, useState } from "react";
import { DATABASE_URL } from '../config'
import axios from "axios";

interface Blogs {
    title: string,
    description: string,
    id: number,
    author: {
        name: string
    }
}

export interface Blog {
    id: number,
    title: string,
    description: string,
    author?: {
        name: string
    }

}

export function useBlog({ id }: { id: string }) {
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<Blog>();

    useEffect(() => {
        axios.get(`${DATABASE_URL}/api/v1/blog/${id}`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }).then(response => {
            setBlog(response.data.blog)
            setLoading(false)

        })
    }, [id])

    return {
        loading,
        blog,
    }
}

export function useBlogs() {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blogs[]>([]);

    useEffect(() => {
        axios.get(`${DATABASE_URL}/api/v1/blog/bulk`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }).then(response => {
            setBlogs(response.data.blog)
            setLoading(false)

        })
    }, [])

    return {
        loading,
        blogs,
    }
}