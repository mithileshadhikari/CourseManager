package com.manager.manager.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.manager.manager.model.Course;
import com.manager.manager.service.CourseService;


@RestController
@RequestMapping(value = "/course")
@CrossOrigin(origins = "*")
public class CourseController {
	
	@Autowired
	CourseService courseService;
	
	@GetMapping(produces = "application/json")
	public ResponseEntity<List<Course>> getAllCourses()
	{
		List<Course> empList=courseService.getAllCourses();
		ResponseEntity<List<Course>> response = 
		new ResponseEntity<List<Course>>(empList,HttpStatusCode.valueOf(200));
		return response;
		
	}
	
	@PostMapping(produces = "application/json")
	public ResponseEntity <Course> saveCourse(@RequestBody Course course)
	{
		Course cou =courseService.saveCourse(course);
		ResponseEntity <Course> response = 
		new ResponseEntity <Course>(cou,HttpStatusCode.valueOf(200));
		return response;
		    
	}
	
	@GetMapping(value = "/{id}",produces = "application/json")
	public ResponseEntity<Course> getCourse(@PathVariable("id")Integer id)
	{
		Course cou=courseService.getCourse(id);
		ResponseEntity<Course> response =
		new ResponseEntity<Course>(cou, HttpStatusCode.valueOf(200));
		return response;
		
	}
	
	@PutMapping(value = "/{id}",produces = "application/json")
	public ResponseEntity<Course> updateCourse(@PathVariable("id")Integer id, @RequestBody Course course)
	{
		Course emp=courseService.updateCourse(id, course);
		ResponseEntity<Course> response =
		new ResponseEntity<Course>(emp,HttpStatusCode.valueOf(200));
		return response;
		
	}
	
	@DeleteMapping(value = "/{id}", produces = "application/json")
	public ResponseEntity<String> deleteCourse(@PathVariable("id") Integer id)
	{
		boolean res = courseService.deleteCourse(id);
		String message;
		int status;
		if(res == true)
		{
		message = "course deleted!";
		status = 200;
		
		} else {
			message = "unable to delete!";
			status = 400;
		}
		ResponseEntity<String> response = 
				new ResponseEntity<String>(message, HttpStatusCode.valueOf(status));
		return response;
		
	}

}
