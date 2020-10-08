import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GroupsService } from 'src/app/Services/groups.service';
import { UsersService } from 'src/app/Services/users.service';
import { Group } from '../../Model/group.model';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css'],
})
export class GroupsComponent implements OnInit {

  data: any[];
  heading: string;

  constructor(private groupService: GroupsService,
    private userService: UsersService,
    private router: Router) { }

  ngOnInit(): void {
    if (this.groupService.isGroup()) {
      this.heading = "Groups";
      this.getGroups();
    } else {
      this.heading = "Users";
      this.getUsers();
    }
  }

  getGroups() {
    this.groupService.getGroups().subscribe((groups) => (this.data = groups));
  }

  getUsers() {
    this.userService.getUsers().subscribe((users) => (this.data = users));
  }

  onAddBtnClick() {
    if (this.groupService.isGroup()) {
      this.router.navigate(["/groups/add"]);
    } else {
      this.router.navigate(["/users/add"]);
    }
  }

  onGetDetail(id: number) {
    if (this.groupService.isGroup()) {
      this.router.navigate(["/groups/" + id]);
    } else {
      this.router.navigate(["/users/" + id]);
    }
  }

  onDelete(item: any) {
    if (this.groupService.isGroup()) {
      this.groupService.deleteGroup(item).subscribe(res => console.log(res));
    } else {
      this.groupService.deleteGroup(item).subscribe(res => console.log(res));
    }
  }
}
