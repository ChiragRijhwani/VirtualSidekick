import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GroupsComponent } from './Components/groups/groups.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { LoginComponent } from './Components/login/login.component';
import { FormsModule } from '@angular/forms';
import { GroupDetailComponent } from './Components/groups/group-detail/group-detail.component';
import { AddGroupComponent } from './Components/add-group/add-group.component';

@NgModule({
  declarations: [
    AppComponent,
    GroupsComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    GroupDetailComponent,
    AddGroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
