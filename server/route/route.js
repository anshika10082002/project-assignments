const express= require("express")
const router= express.Router()
const adminController= require("../controllers/adminController")
const studentController=require("../controllers/studentController")
const examController= require("../controllers/examController")

//==========================Api's============================================//
router.post("/adminRegister",adminController.registerAdmin)
router.post("/login",adminController.loginAdmin)


router.post("/questions",examController.createQuestions)
//router.get("/getQuestions/:id",examController.getQuestions)

router.post("/register",studentController.registerStudent)
router.post("/login",studentController.loginStudent)
//router.get("/questions",studentController.getQuestions)


module.exports = router;

