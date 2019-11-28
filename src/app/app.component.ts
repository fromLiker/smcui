import { Component } from '@angular/core';
import { GlobalService } from '././utils/global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    public globalService: GlobalService
  ) { }
  // 双向数据绑定小例子与app.component.html里的{{titile}}绑定
  title = 'Stock Market Charting Application';

  onLogout() {
    alert('onLogout!');
  }

}
