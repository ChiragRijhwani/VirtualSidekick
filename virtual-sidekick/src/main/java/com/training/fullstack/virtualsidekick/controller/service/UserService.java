package com.training.fullstack.virtualsidekick.controller.service;

import java.util.List;

import com.training.fullstack.virtualsidekick.entity.User;

public interface UserService {

	List<User> getAllUsers();

	User getUser(String id);

	User saveUser(User user);

	User deleteUser(String id);
}
