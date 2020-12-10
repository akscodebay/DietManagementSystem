package com.capstone.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.capstone.model.MonthlyChart;

public interface MonthlyChartRepository extends JpaRepository<MonthlyChart, Long> {
	
	List<MonthlyChart> findByMonth(String month);
	List<MonthlyChart> findByUserId(String userId);
	
	@Query("select weight/(height*height) from MonthlyChart where month=?1 and userId=?2")
	Float getBMI(String month, String userId);
	
	@Query("select count(*) from MonthlyChart where date like ?1% and userId=?2")
	Long monthlyCount(String date, String userId);
	
}
