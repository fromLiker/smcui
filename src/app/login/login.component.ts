import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // 路由传参用到
import { Login } from './login';
import { LoginService } from './login.service';
import { GlobalService } from '../utils/global.service';
// import { ActivatedRoute, Params } from '@angular/router'; // 获取路由传参用到

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = new Login();
  // login: Login = {
  //   email: '',
  //   password: ''
  // };
  submitted = false;

  constructor(
    private router: Router,
    private loginService: LoginService,
    // private globalService 时 {{ globalService.pageMessage }} 不识别
    public globalService: GlobalService
    // private activateInfo: ActivatedRoute
  ) { }

  ngOnInit() {
    // this.login.email = 'liker@cn.ibm.com';
    // this.login.password = '111111';
    // console.log('id::', this.login.email, 'pw::', this.login.password);
  }

  onSignin() {
    this.submitted = true;
    // reset page message
    this.globalService.pageMessage = '';
    console.log('onSubmit() done!');
    this.loginService.findUser(this.login).subscribe(
      res => {
        console.log('data::', res.data);
        this.redirect(res.data);
      }, // success path
      error => this.globalService.pageMessage = error // error path
    );
  }

  // direct to different page according to user type(role)
  redirect(data: any) {
    if (data == null) {
      this.globalService.pageMessage = 'Please signup or recheck your password!';
      console.log(this.globalService.pageMessage);
      return;
    }
    this.globalService.userId = data.id;
    this.globalService.userRole = data.usertype;
    this.globalService.userName = data.username;
    console.log(this.globalService.userId);
    console.log(this.globalService.userRole);
    if ('admin' === data.usertype) {
      console.log(data.usertype);
      console.log(data.id);
      this.router.navigateByUrl('/adminindex');
    } else if ('user' === data.usertype) {
      console.log(data.usertype);
      console.log(data.id);
      this.router.navigateByUrl('/userindex');
    } else {
      console.log(data.usertype);
      console.log(data.id);
      this.router.navigateByUrl('/errorpage');
    }
  }

}
