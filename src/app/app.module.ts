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
      FormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
