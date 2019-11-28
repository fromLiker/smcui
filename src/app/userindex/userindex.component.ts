import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../utils/global.service';

@Component({
  selector: 'app-userindex',
  templateUrl: './userindex.component.html',
  styleUrls: ['./userindex.component.css']
})
export class UserindexComponent implements OnInit {

  constructor(
    public globalService: GlobalService
  ) { }
  // html上 {{ userName }} 为局部变量，{{ globalService.userName }} 为全局变量
  userName = this.globalService.userName;
  ngOnInit() {
  }

}
