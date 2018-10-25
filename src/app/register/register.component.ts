import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  RegisterApp: FormGroup;
  errorText: string;
  constructor(private fbb: FormBuilder, private router: Router) {
    this.RegisterApp = fbb.group({
      defaultFormName: ["", [Validators.required, Validators.minLength(4)]],
      defaultFormUname: ["", [Validators.required, Validators.minLength(4)]],
      defaultFormEmail: [
        "",
        [
          Validators.required,
          Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[com]$")
        ]
      ],
      defaultFormPass: [
        "",
        [
          Validators.required,
          Validators.pattern(
            "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%**?&]).{8,}"
          )
        ]
      ]
    });
  }

  ngOnInit() {}

  Register() {
    if (this.RegisterApp.untouched || this.RegisterApp.invalid) {
      this.errorText = "Please enter valid credentials";
    } else {
      this.errorText = "";
      alert("Registration Successful");
      this.router.navigate(["/userdetails"]);
    }
  }
}
