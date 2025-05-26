package com.infy.dto;

import lombok.Data;

@Data
public class LocationMapDTO {
	private Long id;
	private String name;
	private Double latitude;
	private Double longitude;
	private Double cost;
	
	public LocationMapDTO(Long id,String name,Double latitude,Double longitude,Double cost){
		this.id=id;
		this.name=name;
		this.latitude=latitude;
		this.longitude=longitude;
		this.cost=cost;
	}
}
