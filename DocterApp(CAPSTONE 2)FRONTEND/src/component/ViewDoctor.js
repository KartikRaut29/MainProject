import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export function ViewDoctor(props){
    const [doctor,setDoctor]=useState({});
    const param=useParams();
    const navigate=useNavigate();
    const url = "http://localhost:8080/api/doc/"+param.id;
    const getData = () =>{
        const data = axios.get(url);
        data.then(resp => {console.log(resp.data); return setDoctor(resp.data)})
        .catch(error => console.log(error));
    }
    useEffect(() => {
        getData();
    },[])

    return(
        <div>
            <br></br>
            <h1 align="center">View Doctors List</h1>
            <button className = "btn btn-info btn-sm" onClick={()=>{navigate(-1)}}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-left-square" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
</svg></button>
            
            <ul className="list-group">
            <br></br>
                <li className="list-group-item">Id: {doctor.id}</li>
                <li className="list-group-item">Name: {doctor.name}</li>
                <li className="list-group-item">Department: {doctor.department}</li>
                <li className="list-group-item">Slot: {doctor.slot}</li>
            </ul>
        </div>
    );
}