const express= require("express")
const router= express.Router()
const userController= require("../controllers/userController")
const vaccineController= require("../controllers/vaccineController")

//===========================USER API's==========================================//
 router.post("/user",userController.createUser)

 router.post("/login",userController.loginUser)

 router.get("user",userController.getDetails)


 //=============================VACCINE API's======================================//







 module.exports=router