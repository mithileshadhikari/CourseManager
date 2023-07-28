import axios from "axios";
import React from "react";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";


export default function Course({course , update}) {

  const deleteCourse=(id)=>{
    axios.delete(`${base_url}/course/${id}`).then(
      (response)=>{
       toast.success("course is deleted 1");
       update(id);
      },
      (error)=>{
        toast.error("something went wrong !")
      }
    )
  };

  

  return (
    <div>
      <div className="card text-center mt-3">
  
  <div className="card-body">
    <h5 className="card-title">{course.title}</h5>
    <p className="card-text">{course.description}</p>
    <button type="button" class="btn btn-danger mx-3" onClick={()=>{deleteCourse(course.id);}}>Delete</button>
<button type="button" class="btn btn-warning text-light"><Link to="/add-courses">Update</Link></button>
  </div>
</div>
    </div>
  );
}
