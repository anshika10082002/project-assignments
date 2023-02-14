import React ,{useState}from "react";
//import {useNavigate} from "react-router-dom"

const ToDo=()=>{
 const [Title,setTitle]=useState("");
  const [Description,setDescription]=useState("")
  const [Status,setStatus]= useState("")

  const addTask = (event) => {
    event.preventDefault()
    fetch.post("http://localhost:3001", { Title, Description, Status })
       .then((res) => {
          alert(res.data.message)
          //navigate("/create")
       }).catch((err) => {
          alert(err.message)
       })
 }
    return (
      <>
       <div className="container">
         <div>
          <form onSubmit={addTask}>
            <h1>Your daily task list</h1>
            <input  placeholder="Title" onChange={(event) => setTitle(event.target.value)} required>Title</input>
            <input  placeholder="Description" onChange={(e) => setDescription(e.target.value)} required>Description</input>
            <select onChange={(e) => setStatus(e.target.value)}>Status
              <option selected>Select</option>
              <option>Open</option>
              <option>In-Progress</option>
              <option>Completed</option>
            </select>    
            <input className="btn">Submit</input>
          </form>
         </div>
       </div>
     </>
     )

};

export default ToDo;