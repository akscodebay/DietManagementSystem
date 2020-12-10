package com.capstone.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.capstone.model.Batches;

public interface BatchRepository extends JpaRepository<Batches, Long> {

}
