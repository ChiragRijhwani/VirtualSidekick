import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Powers } from 'src/app/Model/powers.model';
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

  powers = new Array();
  data: any;

  constructor(private groupService: GroupsService,
    private userService: UsersService,
    private route: ActivatedRoute,
    private commonService: CommonService) { }

  ngOnInit(): void {
    if (this.groupService.isGroup()) {
      this.forGroup = true;
      this.getGroup();
      this.groupService.getPowers().subscribe(powers => powers.forEach(power => this.powers.push(power.power)));
    } else {
      this.forGroup = false;
      this.getUser();
    }
  }

  getGroup() {
    const id = this.route.snapshot.params.id;

    if (id) {
      this.groupService.getGroup(id).subscribe(group => {
        this.data = group;
        this.name = group.name;
        this.description = group.description;
        this.power = group.powers;
      });
    }
  }

  getUser() {
    const id = this.route.snapshot.params.id;

    if (id) {
      this.userService.getUser(id).subscribe(user => {
        this.data = user;
        this.name = user.name;
        this.email = user.email;
        this.lockSwitch = user.locked;
        this.onLockSwitchClick();
      });
    }
  }

  onCancel() {
    this.commonService.goHome();
  }

  onSubmit() {
    const id = this.route.snapshot.params.id;

    if (this.groupService.isGroup()) {
      var group = new Group();
      if (id) {
        group = this.data;
      }
      group.name = this.name;
      group.description = this.description;
      group.powers = this.power;
      this.groupService.addGroup(group).subscribe(res => this.commonService.goHome());
    } else {
      var user = new User();
      if (id) {
        user = this.data;
      }
      user.name = this.name;
      user.email = this.email;
      user.locked = this.lockSwitch;
      this.userService.addUser(user).subscribe(res => this.commonService.goHome());
    }
  }

  onLockSwitchClick() {
    if (this.lockSwitch) {
      this.lockSwitchLabel = "Locked";
    } else {
      this.lockSwitchLabel = "Unlocked";
    }
  }
}
