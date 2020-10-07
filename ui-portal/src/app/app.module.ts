import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GroupsComponent } from './Components/groups/groups.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { LoginComponent } from './Components/login/login.component';
import { FormsModule } from '@angular/forms';
import { AddGroupComponent } from './Components/add-group/add-group.component';
import { GroupsService } from './Services/groups.service';

@NgModule({
  declarations: [
    AppComponent,
    GroupsComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    AddGroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    GroupsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
