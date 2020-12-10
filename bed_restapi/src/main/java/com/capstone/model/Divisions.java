package com.capstone.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Divisions {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Long id;
	String groupName;
	
	public Divisions() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Divisions(String groupName) {
		super();
		this.groupName = groupName;
	}
	public String getGroupName() {
		return groupName;
	}
	public void setGroupName(String groupName) {
		this.groupName = groupName;
	}
	@Override
	public String toString() {
		return "Divisions [id=" + id + ", groupName=" + groupName + "]";
	}
	
}
