const vaccineModel = require("../models/vaccineModel")



const vaccine=  async function(req,res){
   try{
             let data= req.body

             let vaccine= await  vaccineModel.create(data)
             res.status(201).send({status:true,data:vaccine})
   }
   catch(error){
         res.status(500).send({status:false,message:error.message})
   }
}


module.exports={vaccine}