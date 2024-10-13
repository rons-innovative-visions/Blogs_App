"use client";

import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";

const Blog = ({params}) => {
    const [blog, setBlog] = useState({});
    const [loading, setLoading] = useState(true);

    const date = moment(blog.createdAt);
    const formattedDate = date.format("MMMM Do, YYYY");

    const getBlog = async () => {
        try{
            const res = await axios.post("http://localhost:3000/api/blogs/one", {title: params.title.replace(/-/g, " ")});
            setBlog(res.data.blog);
            setLoading(false);
        } catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        getBlog();
    }, [])

    return (
        <main className="flex flex-col items-center justify-between p-24 md:max-w-screen-lg mx-auto">
            {loading ? 
                <div className="fixed grid place-items-center h-screen top-0">
                    <div className="loader"></div>
                </div>
            :
                <div className="w-full text-center bg-secondary rounded-lg p-4">
                    <h1 className="text-5xl font-bold text-background pt-4 mb-4">
                        {blog.title}
                    </h1>
                    <hr className="border-accent"/>
                    <div className="p-4">
                        <p className="text-accent text-3xl text-start">{blog.content}</p>
                        <p className="text-accent text-2xl text-end mt-8">published: {formattedDate}</p>
                        <a href="/" className="text-color bg-accent hover:bg-primary hover:text-accent rounded-lg px-4 py-1 text-2xl float-right mt-2">Back</a>
                    </div>
                </div>
            }
        </main>
    );
};

export default Blog