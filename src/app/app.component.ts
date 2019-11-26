import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // 双向数据绑定小例子与app.component.html里的{{titile}}绑定
  title = 'Stock Market Charting Application';
}
