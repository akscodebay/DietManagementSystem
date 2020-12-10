package com.capstone.model;

public class User {
	private String userType;
	private String username;
	private String password;
	private String oldpassword;
	private String batch;
	
	public User() {
	}

	public User(String userType, String username, String password, String oldpassword, String batch) {
		super();
		this.userType = userType;
		this.username = username;
		this.password = password;
		this.oldpassword = oldpassword;
		this.batch = batch;
	}

	public String getUserType() {
		return userType;
	}

	public void setUserType(String userType) {
		this.userType = userType;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getOldpassword() {
		return oldpassword;
	}

	public void setOldpassword(String oldpassword) {
		this.oldpassword = oldpassword;
	}

	public String getBatch() {
		return batch;
	}

	public void setBatch(String batch) {
		this.batch = batch;
	}

	@Override
	public String toString() {
		return "User [userType=" + userType + ", username=" + username + ", password=" + password + ", oldpassword="
				+ oldpassword + ", batch=" + batch + "]";
	}


}
