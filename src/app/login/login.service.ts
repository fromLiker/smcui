import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Login } from './login';
import { LocalURL } from '../../global-config';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(
        private http: HttpClient
    ) { }

    readonly loginURL = LocalURL.serverURL + 'login';

    public findUser(loginForm: Login) {
        console.log('findUser() done!');
        console.log('loginUrl', this.loginURL);
        console.log('loginForm', loginForm);
        console.log('loginForm', loginForm.email);
        console.log('loginForm', loginForm.password);
        return this.http.post<any>(this.loginURL, loginForm);
    }

}
