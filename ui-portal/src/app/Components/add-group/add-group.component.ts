import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  @Input() formVisible = false;

  powers: string[] = ["Read", "Write", "Delete", "Approve", "Admin"];

  constructor(private groupService: GroupsService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const group = new Group();
    group.name = this.name;
    group.description = this.description;
    group.powers = this.power;

    this.groupService.addGroups(group);
  }
}
