package com.springboot.Repository;



import org.springframework.data.jpa.repository.JpaRepository;

import com.springboot.Model.Doctor;
public interface DoctorRepository extends JpaRepository<Doctor, Integer>{
	
	

}
