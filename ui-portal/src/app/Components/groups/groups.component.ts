import { Component, OnInit } from '@angular/core';
import { GroupsService } from 'src/app/Services/groups.service';
import { Group } from './group.model';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css'],
})
export class GroupsComponent implements OnInit {

  groups: Group[];

  constructor(private groupService: GroupsService) { }

  ngOnInit(): void {
    this.getGroups();
  }

  getGroups() {
    this.groupService.getGroups().subscribe((groups) => (this.groups = groups));
  }

  onDelete(group: Group) {
    this.groupService.deleteGroup(group).subscribe(res => console.log(res));
  }
}
