import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Group } from './group.model';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

  name: string;
  description: string;
  power: string[];

  groups: Group[] = [
    {
      "name": "Writers",
      "description": "The content writers",
      "powers": ["Read", "Write"]
    },
    {
      "name": "Readers",
      "description": "The content readers",
      "powers": ["Read"]
    },
    {
      "name": "Publishers",
      "description": "I approve your content",
      "powers": ["Read", "Write", "Delete", "Approve"]
    }
  ]

  powers: string[] = ["Read", "Write", "Delete", "Approve", "Admin"];

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    const group = new Group();
    group.name = this.name;
    group.description = this.description;
    group.powers = this.power;

    this.groups.push(group);
  }
}
