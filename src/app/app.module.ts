import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminindexComponent } from './adminindex/adminindex.component';
import { UserindexComponent } from './userindex/userindex.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

// 定义 AppModule，根模块为 Angular 描述如何组装应用。
@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      AdminindexComponent,
      UserindexComponent,
      ErrorpageComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      AppRoutingModule,
      FormsModule,
      // a测试用
      // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
      // and returns simulated server responses.
      // Remove it when a real server is ready to receive requests.
      // a不用memory的时候必须注掉
      // HttpClientInMemoryWebApiModule.forRoot(
      //    InMemoryDataService, { dataEncapsulation: false }
      // )
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
