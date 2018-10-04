import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  //Properties
  firstName: string;
  lastName: string;
  age: number;
  address: {
    street: string;
    city: string;
    state: string;
  };
  //Methods
  constructor() {}

  ngOnInit() {
    (this.firstName = "Mark"),
      (this.lastName = "Anthony"),
      (this.age = 32),
      (this.address = {
        street: "3 Harison street",
        city: "Dallas",
        state: "TX"
      });
  }
}
