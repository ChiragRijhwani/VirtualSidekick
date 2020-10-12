import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../Model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl = "http://localhost:8080/api/";

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl + "users");
  }

  getUser(id: string): Observable<User> {
    return this.http.get<User>(this.baseUrl + "user/" + id);
  }

  addUser(user: User): Observable<any> {
    return this.http.post<User>(this.baseUrl + "user/add", user);
  }

  deleteUser(deletedUser: User): Observable<any> {
    return this.http.delete<User>(this.baseUrl + "user/" + deletedUser.id);
  }
}
