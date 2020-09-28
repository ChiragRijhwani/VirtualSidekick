import { Component, OnInit } from '@angular/core';
import { GroupsService } from 'src/app/Services/groups.service';
import { Group } from './group.model';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css'],
})
export class GroupsComponent implements OnInit {
  selectedGroup: Group;
  formVisible = false;

  groups: Group[];

  constructor(private groupService: GroupsService) { }

  ngOnInit(): void {
    //this.groups = this.groupService.getGroups();
    this.getGroups();
  }

  getGroups() {
    this.groupService.getGroups().subscribe((groups) => (this.groups = groups));
  }

  setSelected(group: Group) {
    this.selectedGroup = group;
  }

  onAddBtnClick() {
    this.formVisible = true;
    this.selectedGroup = null;
  }

  onNewGroup(group: Group) {
    this.groups.push(group);
    this.formVisible = false;
  }
}
