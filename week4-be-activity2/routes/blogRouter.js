const express=require("express");
const router=express.Router();
const {
    getAllBlogs,
    getBlogById,
    creatBlog,
    updateBlog,
    deletBlog,
}=require("../controllers/blogControllers")

//GET /blogs

router.get("/",getAllBlogs);

//POST /bolgs

router.post("/",creatBlog);

//GET /blogs/:blogId

router.get("/:blogId",getBlogById);

//PUT /blogs/:blogId

router.put("/:blogId",updateBlog);

//DELETE /blogs/:blogId

router.delete("/:blogId",deletBlog)

module.exports=router;