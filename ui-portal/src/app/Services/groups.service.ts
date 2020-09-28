import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Group } from '../Components/groups/group.model';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

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

  getGroups(): Observable<Group[]> {
    return of(this.groups);
  }

  addGroups(group: Group): Observable<string> {
    this.groups.push(group);
    return of("group added");
  }
}
