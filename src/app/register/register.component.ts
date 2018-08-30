import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NgModule } from "@angular/core";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  RegisterApp: FormGroup;
  errorText: string;
  constructor(private fb: FormBuilder) {
    this.RegisterApp = fb.group({
      defaultFormEmail: ["", Validators.required],
      defaultFormPass: ["", [Validators.required, Validators.minLength(8)]]
    });
  }

  ngOnInit() {}

  login() {
    if (this.RegisterApp.untouched || this.RegisterApp.invalid) {
      this.errorText = "Please enter valid login credentials";
    } else {
      this.errorText = "";
      alert("Submission Successful");
    }
  }
}
