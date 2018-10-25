import { NgModule } from "@angular/core";
import { LoginComponent } from "src/app/login/login.component";
import { RegisterComponent } from "src/app/register/register.component";
import { RouterModule, Routes } from "@angular/router";
import { UserdetailsComponent } from "src/app/userdetails/userdetails.component";

export const appRoutes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "registeruser", component: RegisterComponent },
  { path: "userdetails", component: UserdetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
