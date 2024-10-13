import { NextResponse } from "next/server";
import { connect } from "@/dbConfig";
import Blog from "@/models/blogModel";

connect();

export const GET = async (req) => {
    try{
        const blogs = (await Blog.find()).reverse();
        
        return NextResponse.json({message: "Blogs fetched successfully", success: true, blogs});
    } catch(err){
        console.log(err);
        return NextResponse.json({message: "Something went wrong", success: false});
    }
}