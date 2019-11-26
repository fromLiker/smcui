import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel } from './loginModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginModel: LoginModel = {
    email: '',
    password: ''
  };

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

}
