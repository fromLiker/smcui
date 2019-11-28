import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  public userId: string;
  public userRole: string;
  public pageMessage: string;

}
