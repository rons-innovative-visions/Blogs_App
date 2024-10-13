"use client";
import { Blog } from "@/components";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const getBlogs = async () => {
    try{
      const res = await axios.get("http://localhost:3000/api/blogs/get");
      setBlogs(res.data.blogs);
      setLoading(false);
    } catch(error){
      console.log(error);
    }
  }

  useEffect(() => {
    getBlogs();
  }, [])

  console.log(blogs);
  

  return (
    <main className="flex flex-col items-center justify-between p-24 pt-0">
      <div className="z-10 max-w-screen-lg items-center justify-between text-sm w-full">
        {loading ?
          <div className="absolute grid place-items-center inset-0">
            <div className="loader"></div>
          </div>
        :
          <h1 className="text-6xl font-bold text-primary font-sans my-10 text-center">Blogs</h1>
        }
        {blogs && blogs.map((blog) => (
          <Blog key={blog._id} {...blog} />
        ))}
      </div>
    </main>
  );
}