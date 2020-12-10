package com.capstone.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.capstone.model.Admin;

public interface adminRepository extends JpaRepository<Admin, Long>{
	
	Admin findByEmail(String Email);
	Admin findByReferral(String referral);
	Admin findByUserId(String userId);
	
}
