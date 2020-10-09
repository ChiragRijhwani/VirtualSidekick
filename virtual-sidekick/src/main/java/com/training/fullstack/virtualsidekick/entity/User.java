package com.training.fullstack.virtualsidekick.entity;

import org.springframework.data.annotation.Id;

import lombok.Data;

@Data
public class User {
	@Id
	private String id;
	private String name;
	private String email;
	private boolean isLocked;
}
