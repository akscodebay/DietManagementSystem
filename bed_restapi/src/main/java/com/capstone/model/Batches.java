package com.capstone.model;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Batches {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Long id;
	String batchName;
	
	public Batches() {
		
	}

	public Batches(String batchName) {
		this.batchName = batchName;
	}

	public String getBatchName() {
		return batchName;
	}

	public void setBatchName(String batchName) {
		this.batchName = batchName;
	}

	@Override
	public String toString() {
		return "Batches [id=" + id + ", batchName=" + batchName +"]";
	}
	
}
