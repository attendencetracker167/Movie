package com.infy.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.infy.dto.LocationMapDTO;
import com.infy.entity.Location;
import com.infy.repository.LocationRepository;
import com.infy.service.LocationServiceImpl;

import lombok.AllArgsConstructor;
import lombok.Data;

@RestController
@RequestMapping("/api/locations")
@CrossOrigin(origins="*")
public class LocationController {
	
	@Autowired
	private LocationServiceImpl locationServiceImpl;
	
	@Autowired
	private LocationRepository locationRepo;
	
//	@GetMapping
//	public List<Location> getAllLocations(){
//		return locationRepo.findAll();
//	}
	
	@GetMapping
	public List<Location> getLocations(){
		return locationServiceImpl.getAllLocations();
	}
	@GetMapping("/permits/expiring")
	public List<Location> getExpiringPermits(){
		return locationServiceImpl.getLocationsWithExpiringPermits();
	}
	@GetMapping("/costs")
	public List<LocationCostResponse> getAllLocationCosts(){
		List<Location> locations=locationRepo.findAll();
		return locations.stream().map(loc->new LocationCostResponse(loc.getId(),loc.getName(),loc.getCost())).collect(Collectors.toList());
	}
	@GetMapping("/map")
	public List<LocationMapDTO> getAllLocationsForMap(){
		return locationRepo.findAll().stream().map(loc->new 
		LocationMapDTO(
				loc.getId(),
				loc.getName(),
				loc.getLatitude(),
				loc.getLongitude(),
				loc.getCost()))
				.collect(Collectors.toList());
	}
	@PostMapping
	public Location addLocation(@RequestBody Location location) {
		return locationServiceImpl.addLocation(location);
	}
	
	@PutMapping("/{id}")
	public Location updateLocation(@PathVariable Long id,@RequestBody Location location) {
		return locationServiceImpl.updateLocation(id, location);
	}
	
	@DeleteMapping("/{id}")
	public void deleteLocation(@PathVariable Long id) {
		locationServiceImpl.deleteLocation(id);
	}
	@Data
	@AllArgsConstructor
	static class LocationCostResponse{
		private Long id;
		private String name;
		private Double cost;
	}
}
