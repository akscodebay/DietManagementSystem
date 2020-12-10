package com.capstone.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Admin {
	
	@Id
	@Column(length = 50, nullable = false, unique = true)
	String userId;
	String password;
	@Column(length = 100, nullable = false, unique = true)
	String email;
	String name;
	@Column(length = 100, nullable = false, unique = true)
	String referral;
	
	public Admin() {
		
	}

	public Admin(String userId, String password, String email, String name, String referral) {
		super();
		this.userId = userId;
		this.password = password;
		this.email = email;
		this.name = name;
		this.referral = referral;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
	public String getReferral() {
		return referral;
	}

	public void setReferral(String referral) {
		this.referral = referral;
	}

	@Override
	public String toString() {
		return "Admin [userId=" + userId + ", password=" + password + ", email=" + email + ", name=" + name
				+ ", referral=" + referral + "]";
	}
	
}
