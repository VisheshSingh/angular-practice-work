import { Component, OnInit } from "@angular/core";

import { User } from "../../models/User";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = true;

  constructor() {}

  ngOnInit() {
    this.users = [
      {
        firstName: "Mark",
        lastName: "Anthony",
        age: 31,
        address: {
          street: "3 Horizon lane",
          city: "Dallas",
          state: "TX"
        },
        isActive: true,
        registered: new Date("01/02/2014 08:30:00")
      },
      {
        firstName: "Jessica",
        lastName: "Pearson",
        age: 37,
        address: {
          street: "BlueFox Avenue",
          city: "Princeton",
          state: "NJ"
        },
        registered: new Date("06/21/2015 02:12:45")
      },
      {
        firstName: "Harvey",
        lastName: "Spectre",
        age: 24,
        address: {
          street: "1240 Greenbelt Blvd",
          city: "Cincinnati",
          state: "OH"
        },
        registered: new Date("09/10/2015 10:45:36")
      }
    ];
    this.loaded = true;
  }

  addUser(user: User) {
    this.users.push(user);
  }
}
