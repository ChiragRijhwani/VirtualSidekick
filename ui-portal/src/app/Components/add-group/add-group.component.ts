import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  @Output() newGroup = new EventEmitter<Group>();
  @Output() cancel = new EventEmitter();

  @Input() formVisible = false;

  powers: string[] = ["Read", "Write", "Delete", "Approve", "Admin"];

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    const group = new Group();
    group.name = this.name;
    group.description = this.description;
    group.powers = this.power;

    this.newGroup.emit(group);
  }

  onCancel() {
    this.cancel.emit();
  }
}
