const mongoose= require("mongoose")

const taskSchema= new mongoose.Schema({
    Title: String,
    Description: String,
    Status:{
        type:String,
        enum:["Open", "In-Progress", "Completed"]
    }
    
},{timestamps:true})

module.exports= mongoose.model("ToDo",taskSchema)