const express=require("express");
const router=express.Router();
const {
    getAllUsers,
    getUserById,
    creatUser,
    updateUser,
    deletUser,
}=require("../controllers/userControllers")

//GET /users

router.get("/",getAllUsers);

//POST /users

router.post("/",creatUser);

//GET /users/:userId

router.get("/:userId",getUserById);

//PUT /users/:userId

router.put("/:userId",updateUser);

//DELETE /users/:userId

router.delete("/:userId",deletUser)

module.exports=router;