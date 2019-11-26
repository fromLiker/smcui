import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from './login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: Login = {
    email: '',
    password: ''
  };

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.login.email = 'liker@cn.ibm.com';
    this.login.password = '111111';
    console.log('id::', this.login.email, 'pw::', this.login.password);
  }

}
