package com.infy.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.infy.dto.DocumentDTO;
import com.infy.entity.Document;
import com.infy.repository.DocumentRepository;

import jakarta.websocket.server.ServerEndpoint;

@Service
public class DocumentService {
    @Autowired
    private DocumentRepository repository;

    public List<DocumentDTO> getAllDocuments() {
        return repository.findAll().stream()
            .map(this::mapToDTO)
            .collect(Collectors.toList());
    }

    public DocumentDTO getDocument(Long id) {
        return repository.findById(id).map(this::mapToDTO).orElseThrow();
    }

    public DocumentDTO createDocument(DocumentDTO dto) {
        Document doc = new Document();
        doc.setName(dto.getName());
        doc.setVersion(dto.getVersion());
        doc.setPermission(dto.getPermission());
        doc.setMetadata(dto.getMetadata());
        doc.setContentType(dto.getContentType());
        doc.setPath("/docs/" + dto.getName()); // Example path

        return mapToDTO(repository.save(doc));
    }

    public void deleteDocument(Long id) {
        repository.deleteById(id);
    }

    private DocumentDTO mapToDTO(Document doc) {
        DocumentDTO dto = new DocumentDTO();
        dto.setId(doc.getId());
        dto.setName(doc.getName());
        dto.setVersion(doc.getVersion());
        dto.setPermission(doc.getPermission());
        dto.setMetadata(doc.getMetadata());
        dto.setContentType(doc.getContentType());
        return dto;
    }
}

