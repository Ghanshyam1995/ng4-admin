import { Component, OnInit } from '@angular/core';
import {trigger,state,animate,style,transition,keyframes} from "@angular/animations";
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
    router: any;
 public form:FormGroup;
 public email:AbstractControl;
  public password:AbstractControl;
  constructor(fb:FormBuilder) {
    this.form=fb.group({
      'email': ['', Validators.compose([Validators.required])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(8)])]
    
    });
    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
   }

  ngOnInit() {
    
  }


  onSubmit(form){
    console.log(form);
  }
  Login()
  {
    
  }

  

}
