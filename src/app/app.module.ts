import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';
import {  Routes } from "@angular/router";
import {MaterialModule} from "@angular/material";

import {routing} from "./app.routes";
import { LoginComponent } from "app/pages/Login/Login.component";
import { RegisterComponent } from "app/pages/Register/Register.component";
import { HomeComponent } from "app/pages/Home/home.component";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    
    HomeComponent
  ],
  imports: [
    BrowserModule, SlimLoadingBarModule.forRoot(),routing,
    FormsModule,MaterialModule,BrowserAnimationsModule,
    HttpModule,ReactiveFormsModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
