import { NextResponse } from "next/server";
import { connect } from "@/dbConfig";
import Blog from "@/models/blogModel";

connect();

export const POST = async (req) => {
    try{
        const data = await req.json();
        
        if(!data.title || !data.content || !data.key) return NextResponse.json({message: "Required data missing: title, content, key", success: false});
        if(data.key !== process.env.API_KEY) return NextResponse.json({message: "Invalid key", success: false});

        const blog = new Blog({
            title: data.title,
            content: data.content
        });

        await blog.save()

        return NextResponse.json({message: "Blog added successfully", success: true, blog});
    } catch(err){
        console.log(err);
        return NextResponse.json({message: "Something went wrong", success: false});
    }
}