const studentModel= require("../models/studentModel")
const validations= require("../validations/validation")
const jwt= require("jsonwebtoken")
const{isValidName,isValidPassword, isValidEmail,isValidPhone}=validations

const registerStudent= function(req,res){
  try{
         let data= req.body
         let{name,email,password,phone}=data
         if(Object.keys(data).length==0){
            return res.status(400).send({status:false,message:"data should present"})
         }
         if(!email || !isValidEmail(email)){return res.status(400).send({status:false,message:"please provide correct email"})}
         if(!name || !isValidName(name)){return res.status(400).send({status:false,message:"please provide correct name"})}
         if(!password || isValidPassword(password)){return res.status(400).send({status:false,message:"please provide correct password atleast 8 characters ,1 capital letter,1 special character,numbers"})}
         if(!phone || isValidPhone(phone)){return res.status(400).send({status:false,message:"please provide 10 digit  phone number"})}

        const student= studentModel.create(data)
        return res.status(201).send({status:true,data:student})
  }
  catch(error){
    res.status(500).send({status:false,message:error.message})
  }
}

//=======================================================================

const loginStudent= function(req,res){
    try{
         let data= req.body
         let {email,password}=data
         if(Object.keys(data).length==0){
            return res.status(400).send({status:false,message:"please provide inputs"})
         }
         if(!email || !isValidEmail(email)){return res.status(400).send({status:false,message:"please provide correct email"})}
         if(!password || isValidPassword(password)){return res.status(400).send({status:false,message:"please provide correct password atleast 8 characters ,1 capital letter,1 special character,numbers"})}
        
         let findStudent= studentModel.findOne({email:email,password:password})
         if(!findStudent){return res.status(400).send({status:false,message:"please provide correct credentials"})}
        
         let token= jwt.sign({studentId:findStudent.id},"OnlineExam")
         res.status(200).send({status:true,data:token})
    }
    catch(error){
        res.status(500).send({status:false,message:error.message})
    }
}
module.exports={registerStudent,loginStudent}