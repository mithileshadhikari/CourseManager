package com.manager.manager.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.manager.manager.model.Course;

@Repository
public interface CourseDao extends JpaRepository<Course, Integer> {

	
	
}
