package com.capstone.model;

public class FinalData {
	
	long countAbove;
	long countBelow;
	float initialAverage;
	float month1Average;
	float month2Average;
	float month3Average;
	long maleCount;
	long femaleCount;
	
	public FinalData() {
		super();
		// TODO Auto-generated constructor stub
	}

	public FinalData(long countAbove, long countBelow, float initialAverage, float month1Average, float month2Average,
			float month3Average, long maleCount, long femaleCount) {
		super();
		this.countAbove = countAbove;
		this.countBelow = countBelow;
		this.initialAverage = initialAverage;
		this.month1Average = month1Average;
		this.month2Average = month2Average;
		this.month3Average = month3Average;
		this.maleCount = maleCount;
		this.femaleCount = femaleCount;
	}

	public long getCountAbove() {
		return countAbove;
	}

	public void setCountAbove(long countAbove) {
		this.countAbove = countAbove;
	}

	public long getCountBelow() {
		return countBelow;
	}

	public void setCountBelow(long countBelow) {
		this.countBelow = countBelow;
	}

	public float getInitialAverage() {
		return initialAverage;
	}

	public void setInitialAverage(float initialAverage) {
		this.initialAverage = initialAverage;
	}

	public float getMonth1Average() {
		return month1Average;
	}

	public void setMonth1Average(float month1Average) {
		this.month1Average = month1Average;
	}

	public float getMonth2Average() {
		return month2Average;
	}

	public void setMonth2Average(float month2Average) {
		this.month2Average = month2Average;
	}

	public float getMonth3Average() {
		return month3Average;
	}

	public void setMonth3Average(float month3Average) {
		this.month3Average = month3Average;
	}

	public long getMaleCount() {
		return maleCount;
	}

	public void setMaleCount(long maleCount) {
		this.maleCount = maleCount;
	}

	public long getFemaleCount() {
		return femaleCount;
	}

	public void setFemaleCount(long femaleCount) {
		this.femaleCount = femaleCount;
	}

	@Override
	public String toString() {
		return "FinalData [countAbove=" + countAbove + ", countBelow=" + countBelow + ", initialAverage="
				+ initialAverage + ", month1Average=" + month1Average + ", month2Average=" + month2Average
				+ ", month3Average=" + month3Average + ", maleCount=" + maleCount + ", femaleCount=" + femaleCount
				+ "]";
	}

	
}
