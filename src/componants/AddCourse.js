import React , { useEffect, useState } from 'react'
import axios from 'axios';
import base_url from '../api/bootapi';
import { toast } from 'react-toastify';

export default function AddCourse() {

  useEffect(()=>{
    document.title = "CourseInfo || Add courses";
  },[]);

 const[course , setCourse]=useState({});

 //form handle function
 const handForm =(e)=>{
  console.log(course);
  postDatatoServer(course);

  e.preventDefault();
 }

//creating function to post data to server
const postDatatoServer =(data)=>{
  axios.post(`${base_url}/course`,data).then(
    (response)=>{
      console.log(response);
      console.log("success");
      toast.success("Course added !")

    },
    (error)=>{
       console.log(error);
       console.log("fail");
       toast.error("Something went wrong !")
    }
  )
};




  return (
    <div>
      <form onSubmit={handForm}>
        <h3 className="text-center mt-3">Fill Course Details</h3>
  <div className="mb-3">
    <label for="userId" className="form-label">Course Id</label>
    <input type="text" className="form-control" placeholder="enter course id"  name="userId" id="userId" onChange={(e)=>{setCourse({...course,id:e.target.value});}}/>
  </div>
  <div className="mb-3">
    <label for="title" className="form-label">Course Title</label>
    <input type="text" className="form-control" placeholder="enter course title" name="title" id="title" onChange={(e)=>{setCourse({...course,title:e.target.value});}} />
  </div>
  <div className="mb-3">
    <label for="description" className="form-label">Course Description</label>
    <textarea className="form-control" placeholder="enter course description" id="description" name="description" style={{height:'100px'}} onChange={(e)=>{setCourse({...course,description:e.target.value});}}/>
  </div>
  <div className="text-center">
  <button type="submit" className="btn btn-success mx-3">Add Course</button>
  <button type="reset" className="btn btn-warning">Clear</button>
  </div>
</form>
    </div>
  )
}
