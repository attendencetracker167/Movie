package com.infy.service;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.infy.entity.Location;
import com.infy.repository.LocationRepository;

@Service
public class LocationServiceImpl {
	@Autowired
	private LocationRepository locationRepository;
	
	public List<Location> getAllLocations(){
		return locationRepository.findAll();
	}
	public Location addLocation(Location location) {
		return locationRepository.save(location);
	}
	public void deleteLocation(Long id) {
		locationRepository.deleteById(id);
	}
	public Location updateLocation(Long id, Location updateLocation) {
		Location loc=locationRepository.findById(id).orElseThrow();
		loc.setName(updateLocation.getName());
		loc.setAddress(updateLocation.getAddress());
		loc.setContactInfo(updateLocation.getContactInfo());
		loc.setCost(updateLocation.getCost());
		loc.setIsAvailable(updateLocation.getIsAvailable());
		loc.setLatitude(updateLocation.getLatitude());
		loc.setLongitude(updateLocation.getLongitude());
		loc.setPermitExpiry(updateLocation.getPermitExpiry());
		loc.setPermitStatus(updateLocation.getPermitStatus());
		loc.setPhotoUrl(updateLocation.getPhotoUrl());
		return locationRepository.save(loc);
	}
	public List<Location> getLocationsWithExpiringPermits(){
		LocalDate today=LocalDate.now();
		System.out.println(today);
		LocalDate soon=today.plusDays(7);
		System.out.println(soon);
		return locationRepository.findByPermitExpiryBetween(today,soon);
//		return locationRepository.findAll().stream().filter(loc->loc.getPermitExpiry()!=null 
//				&& (loc.getPermitExpiry().isBefore(today)||loc.getPermitExpiry().isBefore(soon)))
//				.collect(Collectors.toList());
		
	}
}
