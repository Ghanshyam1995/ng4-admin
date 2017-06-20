import { Routes ,RouterModule} from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { LoginComponent } from "app/pages/Login/Login.component";
import { RegisterComponent } from "app/pages/Register/Register.component";
import { HomeComponent } from "app/pages/Home/home.component";
export const routes: Routes = [
   {path :'',redirectTo:'/Login',pathMatch :'full'},
   {path :'Login',component:LoginComponent},
   {path :'Register',component:RegisterComponent},
   {path:'home',component:HomeComponent}
]

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);