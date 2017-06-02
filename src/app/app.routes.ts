import {HomeComponent,ForgotPasswordComponent,RegisterComponent,LoginComponent} from "./pages/Index";
import { Routes ,RouterModule} from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

export const routes: Routes =[
   {path :'',redirectTo:'/Login',pathMatch :'full'},
   {path :'Login',component:LoginComponent},
   {path :'Register',component:RegisterComponent},
]

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);