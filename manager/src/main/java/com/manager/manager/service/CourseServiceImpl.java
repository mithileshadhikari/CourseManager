package com.manager.manager.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.manager.manager.dao.CourseDao;
import com.manager.manager.model.Course;




@Service
public class CourseServiceImpl implements CourseService {

	@Autowired
	CourseDao courseDao;

	public List<Course> getAllCourses(){ 
		// TODO Auto-generated constructor stub
		return courseDao.findAll();
	}
	
	public Course getCourse(int id) {
		// TODO Auto-generated constructor stub
		Optional<Course> couop= courseDao.findById(id);
		return couop.get();
	}
	
	public Course saveCourse(Course course) {
		// TODO Auto-generated constructor stub
		return courseDao.save(course);
	}
	
	public Course updateCourse(int id,Course course) {
		// TODO Auto-generated constructor stub
		course.setId(id);
		Optional<Course> couOp=courseDao.findById(course.getId());
		Course couFromDB = couOp.get();
		
		couFromDB.setId(course.getId());
		couFromDB.setTitle(course.getTitle());
		couFromDB.setDescription(course.getDescription());
		
        Course savedCou = courseDao.save(couFromDB);
		
		return savedCou;
	}
	
	public boolean deleteCourse(int id) {
		// TODO Auto-generated constructor stub
		Optional<Course> couOp=courseDao.findById(id);
		
		if (couOp.isPresent()) {
			courseDao.delete(couOp.get());
			return true;
		
		}
		return false;
	}
	
}
