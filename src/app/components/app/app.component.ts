import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { User } from '../../models/User';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  users: User[];

  constructor(private httpClient:HttpClient) {
    this.httpClient.get<User[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe(value => this.users = value)
    ;
  }

}
