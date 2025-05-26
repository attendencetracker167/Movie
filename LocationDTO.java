package com.infy.dto;

import java.time.LocalDate;

import lombok.Data;

@Data
public class LocationDTO {
	private Long id;
	private String name;
	private String address;
	private String contactInfo;
	private String permitStatus;
	private LocalDate permitExpiry;
	private Double cost;
	private Boolean isAvailable;
	private String photoUrl;
	private Double latitude;
	private Double longitude;

}
