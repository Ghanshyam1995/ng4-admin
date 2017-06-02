import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';
import {  Routes } from "@angular/router";
import {MaterialModule} from "@angular/material";
import {HomeComponent,ForgotPasswordComponent,RegisterComponent,LoginComponent} from "./pages/Index";
import {routing} from "./app.routes";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, SlimLoadingBarModule.forRoot(),routing,
    FormsModule,MaterialModule,BrowserAnimationsModule,
    HttpModule,ReactiveFormsModule
  ],
  entryComponents:[ForgotPasswordComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
