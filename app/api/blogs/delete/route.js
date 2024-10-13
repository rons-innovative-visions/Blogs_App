import { NextResponse } from "next/server";
import { connect } from "@/dbConfig";
import Blog from "@/models/blogModel";

connect();

export const DELETE = async (req) => {
    try{
        const data = await req.json();

        if(!data.key || !data._id) return NextResponse.json({message: "Required data missing: key, _id", success: false});
        if(data.key !== process.env.API_KEY) return NextResponse.json({message: "Invalid key", success: false});

        await Blog.findByIdAndDelete(data._id);
        
        return NextResponse.json({message: "Blog deleted successfully", success: true});
    } catch(err){
        // console.log(err);
        return NextResponse.json({message: "Blog deletion failed", success: false});
    }
}