import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { getgroups } from 'process';
import { GroupsService } from 'src/app/Services/groups.service';
import { Group } from '../groups/group.model';

@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.css']
})
export class AddGroupComponent implements OnInit {

  name: string;
  description: string;
  power: string[];

  powers: string[] = ["Read", "Write", "Delete", "Approve", "Admin"];

  group: Group;

  constructor(private groupService: GroupsService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getGroup();
  }

  getGroup() {
    const id = +this.route.snapshot.params.id;

    if (id) {
      this.groupService.getGroup(id).subscribe(group => this.group = group);
      this.name = this.group.name;
      this.description = this.group.description;
      this.power = this.group.powers;
    }
  }

  onSubmit() {
    const id = +this.route.snapshot.params.id;
    var group = new Group();
    if (!id) {
      this.groupService.getGroups().subscribe(groups => group.id = groups.length + 1);
      group.name = this.name;
      group.description = this.description;
      group.powers = this.power;
      this.groupService.addGroups(group);
    } else {
      group = this.group;
      group.name = this.name;
      group.description = this.description;
      group.powers = this.power;
      this.groupService.updateGroups(group);
    }
  }
}
