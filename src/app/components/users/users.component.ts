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
    email: ""
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
    this.loaded = true;
  }

  // addUser() {
  //   this.user.isActive = true;
  //   this.user.registered = new Date();
  //   this.users.unshift(this.user);

  //   this.user = {
  //     firstName: "",
  //     lastName: "",
  //     email: ""
  //   };
  // }

  toggleHide(user: User) {
    user.hide = !user.hide;
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(123);
  }
}
