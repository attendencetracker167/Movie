package com.infy.dto;

import lombok.Data;

@Data
public class DocumentDTO {
    private Long id;
    private String name;
    private String version;
    private String permission;
    private String metadata;
    private String contentType;
}

