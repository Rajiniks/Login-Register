import { NgModule } from "@angular/core";
import { LoginComponent } from "src/app/login/login.component";
import { RegisterComponent } from "src/app/register/register.component";
import { RouterModule, Routes } from "@angular/router";

export const appRoutes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "registeruser", component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
