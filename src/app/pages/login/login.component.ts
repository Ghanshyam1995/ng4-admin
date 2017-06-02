import { Component, OnInit } from '@angular/core';
import {trigger,state,animate,style,transition,keyframes} from "@angular/animations";
import {MdDialog} from "@angular/material";
import { ForgotPasswordComponent } from "app/pages/partials/forgot-password/forgot-password.component";
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { routerTransition } from "app/shared/animations/routing.animation";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [routerTransition()],
    host: { '[@routerTransition]': '' }
   
})
export class LoginComponent implements OnInit {
 public form:FormGroup;
 public email:AbstractControl;
  public password:AbstractControl;
  constructor(public dialog:MdDialog,fb:FormBuilder) {
    this.form=fb.group({
      'email': ['', Validators.compose([Validators.required,Validators.pattern('/\S+@\S+\.\S+/')])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(8)])]
    
    });
    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
   }

  ngOnInit() {
    
  }
  OpenDialog()
  {
    this.dialog.open(ForgotPasswordComponent);
  }

  onSubmit(form){
    console.log(form);
  }

  

}
