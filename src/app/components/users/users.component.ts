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
  currentClasses: {};
  currentStyles: {};

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
        image: "https://placeimg.com/600/600/people/1",
        isActive: true,
        balance: 100,
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
        image: "https://placeimg.com/600/600/people/2",
        balance: 100,
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
        image: "https://placeimg.com/600/600/people/3",
        balance: 100,
        registered: new Date("09/10/2015 10:45:36")
      }
    ];
    this.loaded = true;
    this.setCurrentClasses();
    this.setCurrentStyles();
  }

  addUser(user: User) {
    this.users.push(user);
  }

  setCurrentClasses() {
    this.currentClasses = {
      "btn-dark": this.enableAdd,
      "big-text": this.showExtended
    };
  }

  setCurrentStyles() {
    this.currentStyles = {
      "padding-top": this.showExtended ? "" : "40px",
      "font-size": this.showExtended ? "" : "40px"
    };
  }
}
