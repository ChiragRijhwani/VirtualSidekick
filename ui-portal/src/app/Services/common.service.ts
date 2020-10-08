import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { GroupsService } from './groups.service';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private groupService: GroupsService,
    private router: Router) { }

  goHome() {
    if (this.groupService.isGroup()) {
      this.router.navigate(["/groups/home"]);
    } else {
      this.router.navigate(["/users/home"]);
    }
  }
}
