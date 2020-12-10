package com.capstone.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.capstone.model.TemporaryUser;

public interface TempUserRepository extends JpaRepository<TemporaryUser, String> {
	
	TemporaryUser findByEmail(String email);
	TemporaryUser findByMobileNumber(long mobileNumber);
	TemporaryUser findByReferralCode(String referral);
	@Query(value="select count(*) from TemporaryUser")
	long getCount();

}