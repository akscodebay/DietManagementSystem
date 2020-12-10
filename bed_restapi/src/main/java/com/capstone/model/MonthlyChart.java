package com.capstone.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class MonthlyChart {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Long id;
	String userId;
	float weight;
	float height;
	float chest;
	float waist;
	float shoulders;
	float biceps;
	float forearm;
	float leg;
	float thighs;
	String month;
	String date;
	public MonthlyChart() {
		super();
		// TODO Auto-generated constructor stub
	}
	public MonthlyChart(String userId, float weight, float height, float chest, float waist, float shoulders,
			float biceps, float forearm, float leg, float thighs, String month) {
		super();
		this.userId = userId;
		this.weight = weight;
		this.height = height;
		this.chest = chest;
		this.waist = waist;
		this.shoulders = shoulders;
		this.biceps = biceps;
		this.forearm = forearm;
		this.leg = leg;
		this.thighs = thighs;
		this.month = month;
	}

	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public float getWeight() {
		return weight;
	}
	public void setWeight(float weight) {
		this.weight = weight;
	}
	public float getHeight() {
		return height;
	}
	public void setHeight(float height) {
		this.height = height;
	}
	public float getChest() {
		return chest;
	}
	public void setChest(float chest) {
		this.chest = chest;
	}
	public float getWaist() {
		return waist;
	}
	public void setWaist(float waist) {
		this.waist = waist;
	}
	public float getShoulders() {
		return shoulders;
	}
	public void setShoulders(float shoulders) {
		this.shoulders = shoulders;
	}
	public float getBiceps() {
		return biceps;
	}
	public void setBiceps(float biceps) {
		this.biceps = biceps;
	}
	public float getForearm() {
		return forearm;
	}
	public void setForearm(float forearm) {
		this.forearm = forearm;
	}
	public float getLeg() {
		return leg;
	}
	public void setLeg(float leg) {
		this.leg = leg;
	}
	public float getThighs() {
		return thighs;
	}
	public void setThighs(float thighs) {
		this.thighs = thighs;
	}
	public String getMonth() {
		return month;
	}
	public void setMonth(String month) {
		this.month = month;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	@Override
	public String toString() {
		return "MonthlyChart [id=" + id + ", userId=" + userId + ", weight=" + weight + ", height=" + height
				+ ", chest=" + chest + ", waist=" + waist + ", shoulders=" + shoulders + ", biceps=" + biceps
				+ ", forearm=" + forearm + ", leg=" + leg + ", thighs=" + thighs + ", month=" + month + ", date=" + date
				+ "]";
	}
}
