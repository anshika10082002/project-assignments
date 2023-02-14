const toDoModel= require("../models/toDoModel")

const createTask= async function(req,res){
    try{
        let data= req.body
        let task= await toDoModel.create(data)
        res.status(201).send({status:true,data:task})
    }
    catch(error){
        res.status(500).send({status:false,message:error.message})
    }
}

const getTask= async function(req,res){
    try{
        let allTask= await toDoModel.find()
    res.status(200).send({status:true,data:allTask})
}
catch(error){
    res.status(500).send({status:false,message:error.message})
}
}

const updateTask= async function(req,res){
    try{
         let id= req.params.id
         let data= req.body
         //let{Title,Description,Status}=data
         let updated = await toDoModel.findOneAndUpdate({_id:id},{$set:data},{new:true})
         return res.status(200).send({status:true,data:updated})
    }
    catch(error){
        res.status(500).send({status:false,message:error.message})
    }
}

// const deleteTask= async function(req,res){
//     try{
//         let id= req.params.id
//         let data= req.body
//         let deleted= await toDoModel.findOneAndUpdate({_id:id},{set:data},{new:true})
//          res.status(200).send({status:true,data:deleted})
//     } 
//     catch(error){
//         res.status(500).send({status:false,message:error.message})
//     }

// }
module.exports={createTask,getTask,updateTask}