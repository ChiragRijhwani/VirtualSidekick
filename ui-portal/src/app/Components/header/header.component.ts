import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { CommonService } from 'src/app/Services/common.service';
import { GroupsService } from 'src/app/Services/groups.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  appName = "Virtual Sidekick";
  @ViewChild('navToggle') navToggle: ElementRef;

  constructor(private authService: AuthService,
    private commonService: CommonService,
    private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logOut();
    this.router.navigate(["/login"]);
  }

  navChange() {
    this.navToggle.nativeElement.click();
  }

  goHome() {
    this.commonService.goHome();
  }
}
