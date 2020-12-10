package com.capstone.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.capstone.model.Challenger;

public interface ChallengerRepository extends JpaRepository<Challenger, String> {
	
	Challenger findByEmail(String email);
	Challenger findByMobileNumber(long mobileNumber);
	Challenger findByReferralCode(String referral);
	Challenger findByUserId(String userId);
	List<Challenger>findByBatch(String batch);
	
	@Query("select count(*) from Challenger where batch=?1")
	Long countAbove(String batch);
	
	@Query("select AVG(bmi) from Challenger where batch=?1")
	float getBMI(String batch);
	
	@Query("select count(*) from Challenger where gender=?1")
	Long countGender(String gender);
	
	@Query("select userId from Challenger where division=?1")
	List<String> getGroupUsers(String group);
	
	@Query("select userId from Challenger where batch=?1")
	List<String> getBatchUsers(String batch);
	
}
