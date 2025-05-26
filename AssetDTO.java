package com.infy.dto;

import java.time.LocalDate;

import lombok.Data;
@Data
public class AssetDTO {
	private Long id;
	private String name;
//	private String category;
//	private String condition;
//	private boolean available;
//	private String barcode;
//	private String scene;
//	private String shootingDay;
//	private LocalDate lastMaintenanceDate;
//	private LocalDate nextMaintenanceDue;
	private String type;
	private String status;
	private String assignedToScene;
	private String barCode;
	private String shootingDay;
	private String maintenanceSchedule;
}
