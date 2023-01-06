import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export function EditDoctor(){
    const params=useParams();
    const [doctor,setDoctor]=useState({})
    const url = "http://localhost:8080/api/doc/"+ params.id;

    const navigate=useNavigate();
        const getData = () => {
            const data = axios.get(url);
            data.then(resp => {setDoctor(resp.data);console.log(doctor)})
            .catch(error => console.log(error));
        }
        useEffect(() =>{
            getData();
        },[])
    
        const inputHandler=(e)=>{
            setDoctor((doctor)=>({
                ...doctor,
                [e.target.id]:e.target.value
            }))
        }

        const submitHandler=(e)=>{
            e.preventDefault();
            const data=axios.put(url,doctor);
            data.then(resp=>{
               // if(resp.status===200)
                navigate('/doctorlist')
            })
            .catch(error=>console.log(error));
        }

        return(
            <div>
                <br></br>
                <h2 align="center">Edit Doctor</h2>
                <button className="btn btn-info" onClick={()=>navigate(-1)}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-left-square" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
</svg></button>
                <div className="row">
                    <div className="col-md-6 offset-3">
                        <form className="form" onSubmit={submitHandler}>
                        
                        <label>Id</label>
                        <input type = "number" id="id" placeholder="Enter Id"
                        value={doctor.id} className="form-control" onChange={inputHandler}/>
                        <label>Name</label>
                        <input type = "text" id="name" placeholder="Enter Name"
                        value={doctor.name} className="form-control" onChange={inputHandler}/>
                        <label>Department</label>
                        <input type = "text" id="department" placeholder="Enter Department"
                        value={doctor.department} className="form-control" onChange={inputHandler}/>
                        <label>Slot</label>
                        <input type = "number" id="slot" placeholder="Enter Slot"
                        value={doctor.slot} className="form-control" onChange={inputHandler}/>
                       
                        <div className="Add">
                        <button className="btn btn-primary" type="submit">Submit</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        );


    }