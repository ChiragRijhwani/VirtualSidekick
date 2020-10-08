import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Group } from '../Model/group.model';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  groups: Group[] = [
    {
      id: 1,
      name: "Writers",
      description: "The content writers",
      powers: ["Read", "Write"]
    },
    {
      id: 2,
      name: "Readers",
      description: "The content readers",
      powers: ["Read"]
    },
    {
      id: 3,
      name: "Publishers",
      description: "I approve your content",
      powers: ["Read", "Write", "Delete", "Approve"]
    }
  ]

  constructor(private router: Router) { }

  getGroups(): Observable<Group[]> {
    return of(this.groups);
  }

  getGroup(id: number): Observable<Group> {
    return of(this.groups.find(x => x.id === id));
  }

  addGroups(group: Group): Observable<string> {
    this.groups.push(group);
    return of("group added");
  }

  updateGroups(group: Group): Observable<string> {
    this.groups.forEach((group, i) => {
      if (group === group) {
        this.groups[i] = group;
      }
    })

    return of("group updated");
  }

  deleteGroup(deletedGroup: Group): Observable<string> {
    this.groups.forEach((group, i) => {
      if (group === deletedGroup) {
        this.groups.splice(i, 1);
      }
    })

    return of("group deleted");
  }

  isGroup(): boolean {
    return this.router.url.includes("group");
  }
}
