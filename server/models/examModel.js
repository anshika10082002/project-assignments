const mongoose= require("mongoose")

const examSchema=new mongoose.Schema({
    adminId:{type:String,required:true},
    questions:String,
    
},{timestamps:true})
module.exports= mongoose.model("Exam",examSchema)