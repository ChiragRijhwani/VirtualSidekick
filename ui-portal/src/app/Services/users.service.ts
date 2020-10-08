import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../Model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: User[] = [
    {
      id: 1,
      name: "Narendra Modi",
      email: "narendra.modi@pmoindia.com",
      isLocked: false
    },
    {
      id: 2,
      name: "Rahul Gandhi",
      email: "rahul.gandhi@dream11.com",
      isLocked: true
    }
  ]

  constructor() { }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  getUser(id: number): Observable<User> {
    return of(this.users.find(x => x.id === id));
  }

  addUsers(user: User): Observable<string> {
    this.users.push(user);
    return of("group added");
  }

  updateUsers(user: User): Observable<string> {
    this.users.forEach((user, i) => {
      if (user === user) {
        this.users[i] = user;
      }
    })

    return of("group updated");
  }

  deleteUser(deletedUser: User): Observable<string> {
    this.users.forEach((user, i) => {
      if (user === deletedUser) {
        this.users.splice(i, 1);
      }
    })

    return of("group deleted");
  }
}
