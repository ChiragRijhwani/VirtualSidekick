package com.training.fullstack.virtualsidekick.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.training.fullstack.virtualsidekick.controller.service.UserService;
import com.training.fullstack.virtualsidekick.entity.User;
import com.training.fullstack.virtualsidekick.repository.UserDao;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserDao dao;

	@Override
	public List<User> getAllUsers() {
		return dao.findAll();
	}

	@Override
	public User getUser(String id) {
		return dao.findById(id).orElseThrow(() -> new RuntimeException("No user found with requested id"));
	}

	@Override
	public User saveUser(User user) {
		return dao.save(user);
	}

	@Override
	public User deleteUser(String id) {
		User user = getUser(id);
		dao.delete(user);
		return user;
	}
}
