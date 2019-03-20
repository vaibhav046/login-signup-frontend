import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  userData: Object = null;

  static API_URL: string = 'http://localhost:3000/default/';

  constructor(private http: HttpClient) { }

  login(obj: Object): Observable<Object> {

    return this.http
      .post(LoginService.API_URL + 'login/', obj)
      .pipe(
        map(x => {
          this.userData = User.getInstance(x['email'], x['password'], x['username']);
          return this.userData;
        })
      );
  }

  register(user: any): Observable<Object> {
    console.log(user);
    return this.http
      .post(LoginService.API_URL + 'signup', user.value)
      .pipe(
        map(x => {
          return x;
        })
      );
  }

}
