package com.infy.entity;

import java.time.LocalDate;

import org.springframework.format.annotation.DateTimeFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Location {
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private Long id;
	
	private String name;
	private String address;
	private String contactInfo;
	private String permitStatus;
	@DateTimeFormat(iso=DateTimeFormat.ISO.DATE)
	private LocalDate permitExpiry;
	@Column
	private Double cost;
	private Boolean isAvailable;
	
	@Column(name="photo_url")
	private String photoUrl;
	
	private Double latitude;
	private Double longitude;
}
