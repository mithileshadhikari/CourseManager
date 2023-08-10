package com.manager.manager.service;

import java.util.List;

import com.manager.manager.model.Course;



public interface CourseService {

List<Course> getAllCourses();
	
	Course getCourse(int id);
	
	Course saveCourse(Course course);
	
	Course updateCourse(int id,Course course);
	
	boolean deleteCourse(int id);
}
