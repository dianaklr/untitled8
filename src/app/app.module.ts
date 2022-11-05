import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './components/app/app.component';
import { HttpClientModule} from "@angular/common/http";
import { UserComponent } from './components/user/user.component';
import {UserService} from "./components/services/user.service";

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,


  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
