import { Component, OnInit } from '@angular/core';
import {MdDialogRef} from "@angular/material";
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(public dialog :MdDialogRef<ForgotPasswordComponent>) { }

  ngOnInit() {
  }

}
