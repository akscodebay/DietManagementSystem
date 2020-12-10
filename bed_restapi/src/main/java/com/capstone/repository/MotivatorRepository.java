package com.capstone.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.capstone.model.Motivator;

public interface MotivatorRepository extends JpaRepository<Motivator, String>{
	
	Motivator findByEmail(String Email);
	Motivator findByReferralCode(String referral);
	Motivator findByMobileNumber(long mobileNumber);
	Motivator findByUserId(String userId);
	@Query(value="select count(*) from Motivator where batch=?1")
	long getCount(String batch);
}
