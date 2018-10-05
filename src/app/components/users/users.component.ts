import { Component, OnInit } from "@angular/core";

import { User } from "../../models/User";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: "",
    lastName: "",
    age: null,
    address: {
      street: "",
      city: "",
      state: ""
    }
  };
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;
  showUserForm: boolean = false;

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
        registered: new Date("01/02/2014 08:30:00"),
        hide: true
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
        registered: new Date("06/21/2015 02:12:45"),
        hide: true
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
        registered: new Date("09/10/2015 10:45:36"),
        hide: true
      }
    ];
    this.loaded = true;
  }

  addUser() {
    this.user.isActive = true;
    this.user.registered = new Date();
    this.users.unshift(this.user);

    this.user = {
      firstName: "",
      lastName: "",
      age: null,
      address: {
        street: "",
        city: "",
        state: ""
      }
    };
  }

  toggleHide(user: User) {
    user.hide = !user.hide;
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(123);
  }
}
