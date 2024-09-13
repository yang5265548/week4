const Blog=require("../models/blogModel");


// GET /blogs
const getAllBlogs=async (req,res)=>{
   const blogs=await Blog.find({}).sort({creatdAt:-1}) ;
   res.status(200).json(blogs);
};

// POST /blogs
const creatBlog=async(req,res)=>{
    const newBlog=await Blog.create({...req.body})
    res.status(201).json(newBlog)
}

//GET /blogs/:blogId

const getBlogById=async (req,res)=>{
    const {blogId}=req.params;

    const blog= await Blog.findById(blogId);
    if(blog){
        res.status(200).json(blog)
    }else {
        res.status(404).json({ message: "Blog not found" });
      }

}

//POST /blogs/:blogId

const updateBlog=async (req,res)=>{
    const {blogId}=req.params;
    const updatedBlog=await Blog.findByIdAndUpdate(
        { _id: blogId },
        { ...req.body },
        { new: true, overwrite: true }
    );
    if(updatedBlog){
        res.status(200).json(updatedBlog)
    }else {
        res.status(404).json({ message: "Blog not found" });
      }
}  

//DELETE /blogs/:blogId

const deletBlog=async (req,res)=>{
    const {blogId}=req.params;
    const deletedBlog= await Blog.findByIdAndDelete({_id:blogId});
    if(deletedBlog){
        res.status(200).json({ message: "Blog deleted successfully" });
    } else {
      res.status(404).json({ message: "Blog not found" });
    }
}

module.exports={
    getAllBlogs,
    getBlogById,
    creatBlog,
    updateBlog,
    deletBlog,
};

