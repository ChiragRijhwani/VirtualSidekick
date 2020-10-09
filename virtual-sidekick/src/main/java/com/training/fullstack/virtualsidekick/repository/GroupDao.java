package com.training.fullstack.virtualsidekick.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.training.fullstack.virtualsidekick.entity.Group;

@Repository
public interface GroupDao extends MongoRepository<Group, String> {

}
