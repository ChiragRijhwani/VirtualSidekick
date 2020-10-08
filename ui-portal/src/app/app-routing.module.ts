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
    path: 'users/home',
    canActivate: [AuthGuard],
    component: GroupsComponent
  },
  {
    path: 'groups/home',
    canActivate: [AuthGuard],
    component: GroupsComponent
  },
  {
    path: 'users/add',
    canActivate: [AuthGuard],
    component: AddGroupComponent
  },
  {
    path: 'users/:id',
    canActivate: [AuthGuard],
    component: AddGroupComponent
  },
  {
    path: 'groups/add',
    canActivate: [AuthGuard],
    component: AddGroupComponent
  },
  {
    path: 'groups/:id',
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
