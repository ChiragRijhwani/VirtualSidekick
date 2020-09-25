import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

  title = "Groups";

  data = [
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

}
