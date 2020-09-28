import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Group } from './group.model';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

  selectedGroup: Group;
  formVisible= false;

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

  constructor() { }

  ngOnInit(): void {
  }

  setSelected(group: Group) {
    this.selectedGroup = group;
  }

  onAddBtnClick() {
    this.formVisible=true;
    this.selectedGroup=null;
  }

  onNewGroup(group: Group) {
    this.groups.push(group);
    this.formVisible = false;
  }
}
