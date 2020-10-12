package com.training.fullstack.virtualsidekick.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.training.fullstack.virtualsidekick.controller.service.GroupService;
import com.training.fullstack.virtualsidekick.entity.Group;
import com.training.fullstack.virtualsidekick.repository.GroupDao;

@Service
public class GroupServiceImpl implements GroupService {

	@Autowired
	private GroupDao dao;

	@Override
	public List<Group> getAllGroups() {
		return dao.findAll();
	}

	@Override
	public Group getGroup(String id) {
		return dao.findById(id).orElseThrow(() -> new RuntimeException("No Group found with requested id"));
	}

	@Override
	public Group saveGroup(Group group) {
		return dao.save(group);
	}

	@Override
	public Group deleteGroup(String id) {
		Group group = getGroup(id);
		dao.delete(group);
		return group;
	}
}
