package com.infy.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.infy.entity.Location;
import com.infy.repository.LocationRepository;


public interface LocationService {	
	List<Location> getAllLocations();
	Location addLocation(Location location);
	void deleteLocation(Long id);
	Location updateLocation(Long id, Location updateLocation);
	List<Location> getLocationsWithExpiringPermits();
}
