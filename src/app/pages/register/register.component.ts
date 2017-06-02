import { Component, OnInit } from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { routerTransition } from "app/shared/animations/routing.animation";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  animations: [routerTransition()],
    host: { '[@routerTransition]': '' }
})

export class RegisterComponent implements OnInit {
 form:FormGroup;
 email :AbstractControl;
 firstname :AbstractControl;
 lastname :AbstractControl;
 password :AbstractControl;
 username :AbstractControl;
  constructor(public fb:FormBuilder) { 
    this.form=fb.group({
      'email': ['', Validators.compose([Validators.required])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      'firstname': ['', Validators.compose([Validators.required])],
      'lastname': ['', Validators.compose([Validators.required])],
      'username': ['', Validators.compose([Validators.required])]
    });

    this.email=this.form.controls['email'];
    this.username=this.form.controls['username'];
    this.firstname=this.form.controls['firstname'];
    this.lastname=this.form.controls['lastname'];
    this.password=this.form.controls['password'];
  }

  ngOnInit() {
  }
  onSubmit(form)
  {
    
  }

}
