import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NgModule } from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  LoginApp: FormGroup;
  errorText: string;
  constructor(private fb: FormBuilder) {
    this.LoginApp = fb.group({
      defaultFormEmail: ["", Validators.required],
      defaultFormPass: ["", [Validators.required, Validators.minLength(8)]]
    });
  }

  ngOnInit() {}

  login() {
    if (this.LoginApp.untouched || this.LoginApp.invalid) {
      this.errorText = "Please enter valid login credentials";
    } else {
      this.errorText = "";
      alert("Login Successful");
    }
  }
}
