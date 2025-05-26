package com.infy.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.infy.entity.LocationSchedule;

public interface LocationScheduleRepository extends JpaRepository<LocationSchedule, Long>{
	List<LocationSchedule> findByLocationId(Long locationId);
}
