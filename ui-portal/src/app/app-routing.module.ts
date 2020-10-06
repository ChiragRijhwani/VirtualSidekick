import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddGroupComponent } from './Components/add-group/add-group.component';
import { GroupsComponent } from './Components/groups/groups.component';

const routes: Routes = [
  { path: '', component: GroupsComponent },
  { path: 'home', component: GroupsComponent },
  { path: 'add', component: AddGroupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
