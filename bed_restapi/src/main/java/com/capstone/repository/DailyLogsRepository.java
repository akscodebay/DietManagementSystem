package com.capstone.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.capstone.model.DailyLogs;

public interface DailyLogsRepository extends JpaRepository<DailyLogs, Long>{
	
	List<DailyLogs> findByDate(String date);
	@Query("select count(*) from DailyLogs where date=?1 and userId=?2")
	Long dailyCount(String date, String userId);
}
