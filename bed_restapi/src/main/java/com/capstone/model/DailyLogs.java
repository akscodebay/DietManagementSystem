package com.capstone.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class DailyLogs {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Long id;
	String userId;
	String date;
	String breakfast;
	String lunch;
	String dinner;
	String fruits;
	String vegetables;
	String workouts;
	public DailyLogs() {
		super();
		// TODO Auto-generated constructor stub
	}
	public DailyLogs(String userId, String date, String breakfast, String lunch, String dinner, String fruits,
			String vegetables, String workouts) {
		super();
		this.userId = userId;
		this.date = date;
		this.breakfast = breakfast;
		this.lunch = lunch;
		this.dinner = dinner;
		this.fruits = fruits;
		this.vegetables = vegetables;
		this.workouts = workouts;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public String getBreakfast() {
		return breakfast;
	}
	public void setBreakfast(String breakfast) {
		this.breakfast = breakfast;
	}
	public String getLunch() {
		return lunch;
	}
	public void setLunch(String lunch) {
		this.lunch = lunch;
	}
	public String getDinner() {
		return dinner;
	}
	public void setDinner(String dinner) {
		this.dinner = dinner;
	}
	public String getFruits() {
		return fruits;
	}
	public void setFruits(String fruits) {
		this.fruits = fruits;
	}
	public String getVegetables() {
		return vegetables;
	}
	public void setVegetables(String vegetables) {
		this.vegetables = vegetables;
	}
	public String getWorkouts() {
		return workouts;
	}
	public void setWorkouts(String workouts) {
		this.workouts = workouts;
	}
	@Override
	public String toString() {
		return "DailyLogs [id=" + id + ", userId=" + userId + ", date=" + date + ", breakfast=" + breakfast + ", lunch="
				+ lunch + ", dinner=" + dinner + ", fruits=" + fruits + ", vegetables=" + vegetables + ", workouts="
				+ workouts + "]";
	}
	
}
