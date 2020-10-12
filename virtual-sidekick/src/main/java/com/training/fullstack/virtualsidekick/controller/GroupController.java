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

import com.training.fullstack.virtualsidekick.controller.service.GroupService;
import com.training.fullstack.virtualsidekick.entity.Group;
import com.training.fullstack.virtualsidekick.entity.PowersMaster;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class GroupController {

	@Autowired
	private GroupService service;

	@GetMapping("groups")
	public List<Group> getAllGroups() {
		return service.getAllGroups();
	}

	@GetMapping("group/{id}")
	public Group getGroup(@PathVariable String id) {
		return service.getGroup(id);
	}

	@PostMapping("group/add")
	public Group saveGroup(@RequestBody Group group) {
		return service.saveGroup(group);
	}

	@DeleteMapping("group/{id}")
	public Group deleteGroup(@PathVariable String id) {
		return service.deleteGroup(id);
	}

	@GetMapping("/group/powers")
	public List<PowersMaster> getAllPowers() {
		return service.getAllPowers();
	}
}
