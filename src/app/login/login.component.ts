import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  LoginApp: FormGroup;
  errorText: string;
  constructor(private fb: FormBuilder, private router: Router) {
    this.LoginApp = fb.group({
      defaultFormName: ["", [Validators.required, Validators.minLength(4)]],
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
      this.router.navigate(["/userdetails"]);
    }
  }
  goToRegisterUser() {
    this.router.navigate(["/registeruser"]);
  }
}
