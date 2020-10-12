import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Group } from '../Model/group.model';
import { HttpClient } from '@angular/common/http';
import { Powers } from '../Model/powers.model';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  baseUrl = "http://localhost:8080/api/";

  constructor(private router: Router,
    private http: HttpClient) { }

  getGroups(): Observable<Group[]> {
    return this.http.get<Group[]>(this.baseUrl + "groups");
  }

  getGroup(id: string): Observable<Group> {
    return this.http.get<Group>(this.baseUrl + "group/" + id);
  }

  addGroup(group: Group): Observable<any> {
    return this.http.post<Group>(this.baseUrl + "group/add", group);
  }

  deleteGroup(deletedGroup: Group): Observable<any> {
    return this.http.delete<Group>(this.baseUrl + "group/" + deletedGroup.id);
  }

  isGroup(): boolean {
    return this.router.url.includes("group");
  }

  getPowers(): Observable<Powers[]> {
    return this.http.get<Powers[]>(this.baseUrl + "group/powers");
  }
}
