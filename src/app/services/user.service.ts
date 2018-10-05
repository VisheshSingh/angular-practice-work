import { Injectable } from "@angular/core";
import { User } from "../models/User";

import { Observable } from "rxjs";
import { of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class UserService {
  users: User[];
  constructor() {
    this.users = [
      {
        firstName: "Mark",
        lastName: "Anthony",
        email: "mark@sparx.com",
        registered: new Date("01/02/2014 08:30:00"),
        hide: true
      },
      {
        firstName: "Jessica",
        lastName: "Pearson",
        email: "pearson@gmail.com",
        registered: new Date("06/21/2015 02:12:45"),
        hide: true
      },
      {
        firstName: "Harvey",
        lastName: "Spectre",
        email: "Harvey@dontmesswithme.in",
        registered: new Date("09/10/2015 10:45:36"),
        hide: true
      }
    ];
  }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  addUser(user: User) {
    this.users.unshift(user);
  }
}
