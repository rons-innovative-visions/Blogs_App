import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: String,
    content: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const Blog = mongoose.models.blogs || mongoose.model("blogs", blogSchema);
export default Blog