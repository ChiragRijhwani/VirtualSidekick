package com.training.fullstack.virtualsidekick.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.training.fullstack.virtualsidekick.entity.PowersMaster;

@Repository
public interface PowersMasterDao extends MongoRepository<PowersMaster, String> {

}
