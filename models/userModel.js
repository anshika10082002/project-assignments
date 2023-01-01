const mongoose= require("mongoose")

const userSchema= new mongoose.Schema({
   name:{type:String, required:true,trim:true },
   phoneNumber:{type:Number,required:true},
   age:{type:Number,required:true},
   pincode:{type:String,required:true},
   aadharNumber:{type:Number,require:true}
   

},{timestamps:true})

module.exports= mongoose.model("User",userSchema)