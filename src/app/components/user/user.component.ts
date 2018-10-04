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
  //Methods
  constructor() {}

  ngOnInit() {
    (this.firstName = "Mark"),
      (this.lastName = "Anthony"),
      (this.age = 32),
      this.hasBirthday();
    console.log(this.age);
  }

  hasBirthday() {
    this.age + 1;
  }
}
