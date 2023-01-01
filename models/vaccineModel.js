const mongoose= require("mongoose")

const vaccineSchema= new mongoose.Schema({
    center:{type:String},
    date:{type:Date},
    slot:[{
        time:{type:String},
        quantity:{type:Number}
    }]
    
},{timestamps:true})

module.exports= mongoose.model("Vaccine",vaccineSchema)


