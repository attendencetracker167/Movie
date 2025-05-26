package com.infy.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.infy.entity.Document;

public interface DocumentRepository extends JpaRepository<Document, Long> {
    List<Document> findByNameContainingIgnoreCaseOrMetadataContainingIgnoreCase(String name, String metadata);
}
