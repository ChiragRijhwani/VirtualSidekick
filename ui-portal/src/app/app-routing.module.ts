import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddGroupComponent } from './Components/add-group/add-group.component';
import { GroupsComponent } from './Components/groups/groups.component';
import { LoginComponent } from './Components/login/login.component';
import { AuthGuard } from './Services/auth.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: GroupsComponent
  },
  {
    path: 'home',
    canActivate: [AuthGuard],
    component: GroupsComponent
  },
  {
    path: 'group/add',
    canActivate: [AuthGuard],
    component: AddGroupComponent
  },
  {
    path: 'group/:id',
    canActivate: [AuthGuard],
    component: AddGroupComponent
  },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
