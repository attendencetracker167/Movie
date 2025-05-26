//package com.infy.controller;
//
//import java.time.LocalDateTime;
//import java.util.List;
//import java.util.Map;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.DeleteMapping;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.PutMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.infy.entity.Folder;
//import com.infy.repository.FolderRepository;
//
//@RestController
//@RequestMapping("/api/folders")
//public class FolderController {
//    
//    @Autowired 
//    private FolderRepository folderRepo;
//
//    @GetMapping
//    public List<Folder> getAllFolders() {
//        return folderRepo.findAll();
//    }
//
//    @PostMapping
//    public Folder createFolder(@RequestBody Folder folder) {
//        folder.setCreatedAt(LocalDateTime.now());
//        return folderRepo.save(folder);
//    }
//
//    @PutMapping("/{id}")
//    public Folder renameFolder(@PathVariable Long id, @RequestBody Map<String, String> body) {
//        Folder folder = folderRepo.findById(id).orElseThrow();
//        folder.setName(body.get("name"));
//        return folderRepo.save(folder);
//    }
//
//    @DeleteMapping("/{id}")
//    public void deleteFolder(@PathVariable Long id) {
//        folderRepo.deleteById(id);
//    }
//}
//
