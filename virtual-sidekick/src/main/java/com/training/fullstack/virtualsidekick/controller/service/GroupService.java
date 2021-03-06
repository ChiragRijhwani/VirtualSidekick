package com.training.fullstack.virtualsidekick.controller.service;

import java.util.List;

import com.training.fullstack.virtualsidekick.entity.Group;
import com.training.fullstack.virtualsidekick.entity.PowersMaster;

public interface GroupService {

	List<Group> getAllGroups();

	Group getGroup(String id);

	Group saveGroup(Group group);

	Group deleteGroup(String id);

	List<PowersMaster> getAllPowers();
}
