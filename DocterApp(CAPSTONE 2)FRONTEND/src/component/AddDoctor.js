import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function AddDoctor(){
    const navigate=useNavigate();
    const [doctor,setDoctor]=useState({id:"",name:"",department:"",slot:""})
    const url = "http://localhost:8080/api/doc";
    
    const inputHandler=(e)=>{
        setDoctor((doctor)=>({
            ...doctor,
            [e.target.id]:e.target.value
        }))
    }

    const submitHandler=(e)=>{
        e.preventDefault();
        const data=axios.post(url,doctor);
        data.then(resp=>{
          //  if(resp.status===201)
            navigate('/doctorlist')
        })
        .catch(error=>console.log(error));
    }

    return(
        <div>
            <br></br>
            <h2 align="center"> ADD Doctor Here... </h2>
            <div className="row">
                <div className="col-md-6 offset-3">
                    <form className="form" onSubmit={submitHandler}>
                        <label>Id</label>
                        <input type = "number" id="id" placeholder="Enter Id"
                        value={doctor.id} className="form-control" onChange={inputHandler}/>
                        <label>Name</label>
                        <input type = "text" id="name" placeholder="Enter Docter Name"
                        value={doctor.name} className="form-control" onChange={inputHandler}/>
                        <label>Department</label>
                        <input type = "text" id="department" placeholder="Enter Docter Department"
                        value={doctor.department} className="form-control" onChange={inputHandler}/>
                        <label>Slot</label>
                        <input type = "number" id="slot" placeholder="Enter no. of slots"
                        value={doctor.slot} className="form-control" onChange={inputHandler}/>
                       
                       <div className="Add">
                        <button className="btn btn-info btn-lg" type="submit">Add Doctor</button>
                        </div>
                        
                    </form>
                </div>
            </div>
   
        </div>
    )

}

