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
        image: "https://placeimg.com/600/600/people/1"
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
        image: "https://placeimg.com/600/600/people/2"
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
        image: "https://placeimg.com/600/600/people/3"
      }
    ];
    this.loaded = true;

    this.addUser({
      firstName: "David",
      lastName: "Fallon"
    });
  }

  addUser(user: User) {
    this.users.push(user);
  }
}
