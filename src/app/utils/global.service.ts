import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  public userId: string;
  public userName: string;
  public userRole: string;

  // public userInfo: {
  //   id: any;
  //   username: string;
  //   password: string;
  //   usertype: string;
  //   email: string;
  //   mobile: string;
  //   confirmed: string;
  // };

}
