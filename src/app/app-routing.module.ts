import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminindexComponent } from './adminindex/adminindex.component';
import { UserindexComponent } from './userindex/userindex.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    // 访问路径精准
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'adminindex',
    component: AdminindexComponent
  },
  {
    path: 'userindex',
    component: UserindexComponent
  },
  {
    path: 'errorpage',
    component: ErrorpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
