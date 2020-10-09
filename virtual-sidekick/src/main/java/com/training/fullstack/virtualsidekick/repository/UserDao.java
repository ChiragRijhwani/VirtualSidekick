package com.training.fullstack.virtualsidekick.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.training.fullstack.virtualsidekick.entity.User;

@Repository
public interface UserDao extends MongoRepository<User, String>{

}
