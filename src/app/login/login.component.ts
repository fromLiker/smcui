import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from './login';
import { LoginService } from './login.service';

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
  submitted = false;

  constructor(
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.login.email = 'liker@cn.ibm.com';
    this.login.password = '111111';
    console.log('id::', this.login.email, 'pw::', this.login.password);
  }

  onSignin() {
    this.submitted = true;
    console.log('onSubmit() done!');
    this.loginService.findUser(this.login).subscribe(data => {
      console.log('aaaaa', data);
    });
  }

}
