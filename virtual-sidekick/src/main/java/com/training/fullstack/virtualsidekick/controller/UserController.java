package com.training.fullstack.virtualsidekick.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.training.fullstack.virtualsidekick.controller.service.UserService;
import com.training.fullstack.virtualsidekick.entity.User;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class UserController {

	@Autowired
	private UserService service;

	@GetMapping("users")
	public List<User> getAllUsers() {
		return service.getAllUsers();
	}

	@GetMapping("user/{id}")
	public User getUser(@PathVariable String id) {
		return service.getUser(id);
	}

	@PostMapping("user/add")
	public User saveUser(@RequestBody User user) {
		return service.saveUser(user);
	}

	@DeleteMapping("user/{id}")
	public User deleteUser(@PathVariable String id) {
		return service.deleteUser(id);
	}
}
