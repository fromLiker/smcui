import { Component } from '@angular/core';
import { Router } from '@angular/router'; // 路由传参用到
import { GlobalService } from '././utils/global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private router: Router,
    public globalService: GlobalService
  ) { }
  // 双向数据绑定小例子与app.component.html里的{{titile}}绑定
  title = 'Stock Market Charting Application';

  onLogout(userId: string) {
    console.log('onLogout!', userId);
    this.globalService.userName = '';
    this.router.navigateByUrl('/login');
  }

}
