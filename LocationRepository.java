package com.infy.repository;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.infy.entity.Location;

@Repository
public interface LocationRepository extends JpaRepository<Location, Long>{

	List<Location> findByPermitExpiryBetween(LocalDate today, LocalDate soon);

}
