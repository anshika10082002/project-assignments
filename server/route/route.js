const express= require("express")
const router= express.Router()
const toDoController= require("../controllers/toDoController")

//=============================API's=======================================//

router.post("/create",toDoController.createTask)

router.get("/get",toDoController.getTask)

router.put("/update/:id",toDoController.updateTask)

//router.delete("/delete/:id",toDoController.deleteTask)

module.exports = router;

