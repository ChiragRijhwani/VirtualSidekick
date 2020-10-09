import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Group } from '../Model/group.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  // groups: Group[] = [
  //   {
  //     id: "1",
  //     name: "Writers",
  //     description: "The content writers",
  //     powers: ["Read", "Write"]
  //   },
  //   {
  //     id: "2",
  //     name: "Readers",
  //     description: "The content readers",
  //     powers: ["Read"]
  //   },
  //   {
  //     id: "3",
  //     name: "Publishers",
  //     description: "I approve your content",
  //     powers: ["Read", "Write", "Delete", "Approve"]
  //   }
  // ];

  baseUrl = "http://localhost:8080/api/";

  constructor(private router: Router,
    private http: HttpClient) { }

  getGroups(): Observable<Group[]> {
    return this.http.get<Group[]>(this.baseUrl + "groups");
  }

  getGroup(id: string): Observable<Group> {
    return this.http.get<Group>(this.baseUrl + "group/" + id);
  }

  addGroups(group: Group): Observable<any> {
    return this.http.post<Group>(this.baseUrl + "group/add", group);
  }

  deleteGroup(deletedGroup: Group): Observable<any> {
    return this.http.delete<Group>(this.baseUrl + "group/" + deletedGroup.id);
  }

  isGroup(): boolean {
    return this.router.url.includes("group");
  }
}
