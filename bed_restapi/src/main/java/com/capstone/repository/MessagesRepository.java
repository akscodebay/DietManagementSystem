package com.capstone.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.capstone.model.Messages;

public interface MessagesRepository extends JpaRepository<Messages, Long> {
	
	List<Messages> findByUserId(String userId);
}
