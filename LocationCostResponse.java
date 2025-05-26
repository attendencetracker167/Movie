package com.infy.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class LocationCostResponse {
	private Long id;
	private String name;
	private Double cost;
}
