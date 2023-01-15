const mongoose=require("mongoose")

const studentSchema= new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String, required:true},
    phone:{type:Number,required:true}

},{timestamps:true})

module.exports= mongoose.model("Student",studentSchema)