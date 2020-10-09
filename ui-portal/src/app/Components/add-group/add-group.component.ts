import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { getgroups } from 'process';
import { User } from 'src/app/Model/user.model';
import { CommonService } from 'src/app/Services/common.service';
import { GroupsService } from 'src/app/Services/groups.service';
import { UsersService } from 'src/app/Services/users.service';
import { Group } from '../../Model/group.model';

@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.css']
})
export class AddGroupComponent implements OnInit {

  name: string;
  description: string;
  power: string[];
  forGroup: boolean;
  lockSwitch: boolean;
  lockSwitchLabel: string = "Unlocked";
  email: string;

  powers: string[] = ["Read", "Write", "Delete", "Approve", "Admin"];

  data: any;

  constructor(private groupService: GroupsService,
    private userService: UsersService,
    private route: ActivatedRoute,
    private commonService: CommonService) { }

  ngOnInit(): void {
    if (this.groupService.isGroup()) {
      this.forGroup = true;
      this.getGroup();
    } else {
      this.forGroup = false;
      this.getUser();
    }
  }

  getGroup() {
    const id = +this.route.snapshot.params.id;

    if (id) {
      this.groupService.getGroup(id).subscribe(group => this.data = group);
      this.name = this.data.name;
      this.description = this.data.description;
      this.power = this.data.powers;
    }
  }

  getUser() {
    const id = +this.route.snapshot.params.id;

    if (id) {
      this.userService.getUser(id).subscribe(user => this.data = user);
      this.name = this.data.name;
      this.email = this.data.email;
      this.lockSwitch = this.data.isLocked;
      this.onLockSwitchClick();
    }
  }

  onCancel() {
    this.commonService.goHome();
  }

  onSubmit() {
    const id = +this.route.snapshot.params.id;
    if (this.groupService.isGroup()) {
      var group = new Group();
      if (!id) {
        this.groupService.getGroups().subscribe(groups => group.id = groups.length + 1);
        group.name = this.name;
        group.description = this.description;
        group.powers = this.power;
        this.groupService.addGroups(group);
      } else {
        group = this.data;
        group.name = this.name;
        group.description = this.description;
        group.powers = this.power;
        this.groupService.updateGroups(group);
      }
    } else {
      var user = new User();
      if (!id) {
        this.userService.getUsers().subscribe(users => user.id = users.length + 1);
        user.name = this.name;
        user.email = this.email;
        user.isLocked = this.lockSwitch;
        this.userService.addUsers(user);
      } else {
        user = this.data;
        user.name = this.name;
        user.email = this.email;
        user.isLocked = this.lockSwitch;
        this.userService.updateUsers(user);
      }
    }

    this.commonService.goHome();
  }

  onLockSwitchClick() {
    if (this.lockSwitch) {
      this.lockSwitchLabel = "Locked";
    } else {
      this.lockSwitchLabel = "Unlocked";
    }
  }
}
