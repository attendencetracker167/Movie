//package com.infy.controller;
//
//import java.util.List;
//
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.infy.entity.User;
//import com.infy.repository.UserRepository;
//
//@RestController
//@RequestMapping("/api/users")
//public class UserController {
//	private final UserRepository userRepository;
//	public UserController(UserRepository userRepository) {
//		this.userRepository=userRepository;
//	}
//	@PostMapping
//	public User createUser(@RequestBody User user) {
//		return userRepository.save(user);
//	}
//	@GetMapping
//	public List<User> getAllUser(){
//		return userRepository.findAll();
//	}
//	@GetMapping("/{id}")
//	public User getUserById(@PathVariable Long id) {
//		return userRepository.findById(id).orElseThrow();
//	}
//}
