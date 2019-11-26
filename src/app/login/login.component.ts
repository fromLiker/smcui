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
    email: 'liker@cn.ibm.com',
    password: '111111'
  };

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

}
