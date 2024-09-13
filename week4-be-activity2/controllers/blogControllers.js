const { default: mongoose } = require("mongoose");
const Blog = require("../models/blogModel");


// GET /blogs
const getAllBlogs = async (req, res) => {

    try {
        const blogs = await Blog.find({}).sort({ creatdAt: -1 });
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({ message: "Failed to retrieve blogs" });
    }
};

// POST /blogs
const creatBlog = async (req, res) => {
    try {
        const newBlog = await Blog.create({ ...req.body })
        res.status(201).json(newBlog)
    } catch (error) {
        res.status(400).json({ message: "Failed to create blogs", error: error.message });
    }
}

//GET /blogs/:blogId

const getBlogById = async (req, res) => {

    const { blogId } = req.params;
    if (!mongoose.Types.ObjectId.isValid(blogId)) {
        return res.status(400).json({ message: "Invalid blog ID" });
    }

    try {
        const blog = await Blog.findById(blogId);
        if (blog) {
            res.status(200).json(blog)
        } else {
            res.status(404).json({ message: "Blog not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Failed to retrieve blog" });
    }

}

//POST /blogs/:blogId

const updateBlog = async (req, res) => {
    const { blogId } = req.params;


    if (!mongoose.Types.ObjectId.isValid(blogId)) {
        return res.status(400).json({ message: "Invalid blog ID" });
    }
    try {
        const updatedBlog = await Blog.findByIdAndUpdate(
            { _id: blogId },
            { ...req.body },
            { new: true, overwrite: true }
        );
        if (updatedBlog) {
            res.status(200).json(updatedBlog)
        } else {
            res.status(404).json({ message: "Blog not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Failed to update blog" });
    }
}

//DELETE /blogs/:blogId

const deletBlog = async (req, res) => {
    const { blogId } = req.params;
    if (!mongoose.Types.ObjectId.isValid(blogId)) {
        return res.status(400).json({ message: "Invalid blog ID" });
    }
    try {

        const deletedBlog = await Blog.findByIdAndDelete({ _id: blogId });
        if (deletedBlog) {
            res.status(200).json({ message: "Blog deleted successfully" });
        } else {
            res.status(404).json({ message: "Blog not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Failed to delete blog" });
    }
}

module.exports = {
    getAllBlogs,
    getBlogById,
    creatBlog,
    updateBlog,
    deletBlog,
};

