const userModel= require("../models/userModel")


const createUser= async function(req,res){
    try{
        let data= req.body
         
        if(Object.keys(data).length==0){
            return res.status(400).send({status:false,message:"request body can not be empty"})
        }

        let user= await userModel.create(data)
        res.status(201).send({status:true,message:"user Created" ,data:user})
    }
    catch(error){
        req.status(500).send({status:false,message:error.message})
    }
}



module.exports={createUser}