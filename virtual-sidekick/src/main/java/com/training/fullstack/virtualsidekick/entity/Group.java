package com.training.fullstack.virtualsidekick.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document(collection = "group")
public class Group {

	@Id
	private String id;
	private String name;
	private String description;
	private String[] powers;
}
