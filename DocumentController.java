package com.infy.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.infy.dto.DocumentDTO;
import com.infy.service.DocumentService;

@RestController
@RequestMapping("/api/documents")
@CrossOrigin
public class DocumentController {

    @Autowired
    private DocumentService service;

    @GetMapping
    public List<DocumentDTO> getAllDocuments() {
        return service.getAllDocuments();
    }

    @PostMapping
    public DocumentDTO addDocument(@RequestBody DocumentDTO dto) {
        return service.createDocument(dto);
    }

    @DeleteMapping("/{id}")
    public void deleteDocument(@PathVariable Long id) {
        service.deleteDocument(id);
    }

    @GetMapping("/search")
    public List<DocumentDTO> searchDocuments(@RequestParam String q) {
        return service.searchDocuments(q);
    }
}


