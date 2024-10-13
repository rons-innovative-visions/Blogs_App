import { NextResponse } from "next/server";
import { connect } from "@/dbConfig";
import Blog from "@/models/blogModel";

connect();

export const POST = async (req) => {
    try{
        console.log("HELLO");
        
        const data = await req.json();
        
        if(!data.title) return NextResponse.json({message: "Required data missing: title", success: false});
        
        const blog = await Blog.findOne({title: data.title});
        if(!blog) return NextResponse.json({message: "Blog not found", success: false});
        console.log(blog);

        return NextResponse.json({message: "Blog fetched successfully", success: true, blog});
    } catch(err){
        console.log(err);
        return NextResponse.json({message: "Something went wrong", success: false});
    }
}