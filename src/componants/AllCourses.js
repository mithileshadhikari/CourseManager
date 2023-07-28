import React, { useState , useEffect } from 'react'
import Course from './Course';
import base_url from '../api/bootapi';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function AllCourses() {

  useEffect(()=>{
    document.title = "CourseInfo || All courses";
  },[]);

  //function to call server
  const getAllCoursesFromServer =()=>{
    axios.get(`${base_url}/course`).then(
      (response)=>{
         //for success
        // console.log(response);
        console.log(response.data);
        toast.success("course has been loaded",{position:'bottom-center'});
        setCourses(response.data);
      },
      (error)=>{
        //for error
        console.log(error);
        toast.error("something went wrong");
      }
    );
  };

  //calling loading course function
  useEffect(()=>{
    getAllCoursesFromServer();
  }, []);







  const[courses,setCourses] = useState ([]);
  
  const removeCourseById =(id)=>{
    setCourses(courses.filter((c)=>c.id !=id));
  };


  return (
    <div>
      <h4 className="text-center mt-4">All Courses</h4>
     
     {
        courses.length > 0 ? courses.map((item)=>(

            <Course key={item.id} course={item} update={ removeCourseById}/>

        )) :"No courses"

        
     }



    </div>
  )
}
