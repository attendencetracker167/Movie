package com.infy.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.infy.entity.Location;
import com.infy.entity.LocationSchedule;
import com.infy.repository.LocationRepository;
import com.infy.repository.LocationScheduleRepository;
import org.springframework.web.bind.annotation.GetMapping;
import lombok.Data;

@RestController
@RequestMapping("/api/schedules")
@CrossOrigin
public class ScheduleController {
	
	@Autowired
	private LocationScheduleRepository scheduleRepo;
	
	@Autowired
	private LocationRepository locationRepo;
	
	@PostMapping
	public LocationSchedule addSchedule(@RequestBody ScheduleRequest request) {
		Location location=locationRepo.findById(request.getLocationId()).orElseThrow();
		LocationSchedule schedule=new LocationSchedule();
		schedule.setLocation(location);
		schedule.setStartDate(request.getStartDate());
		schedule.setEndDate(request.getEndDate());
		schedule.setPurpose(request.getPurpose());
		schedule.setBookedBy(request.getBookedBy());
		return scheduleRepo.save(schedule);
		
	}
	
	@GetMapping("/location/{locationId}")
	public List<LocationSchedule> getSchedukes(@PathVariable Long locationId){
		return scheduleRepo.findByLocationId(locationId);
	}
	
	@DeleteMapping("/{id}")
	public void deleteSchedule(@PathVariable Long id) {
		scheduleRepo.deleteById(id);
	}
}

@Data
class ScheduleRequest{
	private Long locationId;
	private LocalDate startDate;
	private LocalDate endDate;
	private String purpose;
	private String bookedBy;
}
