package com.capstone.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class TemporaryUser {
	@Id
	@Column(length = 50, nullable = false, unique = true)
	String userId;
	String name;
	String gender;
	@Column(nullable = false, unique = true)
	Long mobileNumber;
	@Column(length = 50, nullable = false, unique = true)
	String email;
	String address;
	String city;
	String state;
	String country;
	int pincode;
	float height;
	float weight;
	float bmi;
	String reason;
	String medicalCondition;
	String dietRestrictions;
	String dietCustom;
	String pregnantStatus;
	@Column(nullable = false)
	String referredByCode;
	@Column(length = 50, nullable = false, unique = true)
	String referralCode;
	String password;
	public TemporaryUser() {
		super();
		// TODO Auto-generated constructor stub
	}

	public TemporaryUser(String userId, String name, String gender, Long mobileNumber, String email, String address,
			String city, String state, String country, int pincode, float height, float weight, float bmi,
			String reason, String medicalCondition, String dietRestrictions, String dietCustom, String pregnantStatus,
			String referredByCode, String refferalCode, String password) {
		super();
		this.userId = userId;
		this.name = name;
		this.gender = gender;
		this.mobileNumber = mobileNumber;
		this.email = email;
		this.address = address;
		this.city = city;
		this.state = state;
		this.country = country;
		this.pincode = pincode;
		this.height = height;
		this.weight = weight;
		this.bmi = bmi;
		this.reason = reason;
		this.medicalCondition = medicalCondition;
		this.dietRestrictions = dietRestrictions;
		this.dietCustom = dietCustom;
		this.pregnantStatus = pregnantStatus;
		this.referredByCode = referredByCode;
		this.referralCode = refferalCode;
		this.password = password;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public Long getMobileNumber() {
		return mobileNumber;
	}

	public void setMobileNumber(Long mobileNumber) {
		this.mobileNumber = mobileNumber;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public int getPincode() {
		return pincode;
	}

	public void setPincode(int pincode) {
		this.pincode = pincode;
	}

	public float getHeight() {
		return height;
	}

	public void setHeight(float height) {
		this.height = height;
	}

	public float getWeight() {
		return weight;
	}

	public void setWeight(float weight) {
		this.weight = weight;
	}

	public float getBmi() {
		return bmi;
	}

	public void setBmi(float bmi) {
		this.bmi = bmi;
	}

	public String getReason() {
		return reason;
	}

	public void setReason(String reason) {
		this.reason = reason;
	}

	public String getMedicalCondition() {
		return medicalCondition;
	}

	public void setMedicalCondition(String medicalCondition) {
		this.medicalCondition = medicalCondition;
	}

	public String getDietRestrictions() {
		return dietRestrictions;
	}

	public void setDietRestrictions(String dietRestrictions) {
		this.dietRestrictions = dietRestrictions;
	}

	public String getDietCustom() {
		return dietCustom;
	}

	public void setDietCustom(String dietCustom) {
		this.dietCustom = dietCustom;
	}

	public String getPregnantStatus() {
		return pregnantStatus;
	}

	public void setPregnantStatus(String pregnantStatus) {
		this.pregnantStatus = pregnantStatus;
	}

	public String getReferredByCode() {
		return referredByCode;
	}

	public void setReferredByCode(String referredByCode) {
		this.referredByCode = referredByCode;
	}

	public String getRefferalCode() {
		return referralCode;
	}

	public void setRefferalCode(String refferalCode) {
		this.referralCode = refferalCode;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "TemporaryUser [userId=" + userId + ", name=" + name + ", gender=" + gender + ", mobileNumber="
				+ mobileNumber + ", email=" + email + ", address=" + address + ", city=" + city + ", state=" + state
				+ ", country=" + country + ", pincode=" + pincode + ", height=" + height + ", weight=" + weight
				+ ", bmi=" + bmi + ", reason=" + reason + ", medicalCondition=" + medicalCondition
				+ ", dietRestrictions=" + dietRestrictions + ", dietCustom=" + dietCustom + ", pregnantStatus="
				+ pregnantStatus + ", referredByCode=" + referredByCode + ", refferalCode=" + referralCode
				+ ", password=" + password + "]";
	}
}
