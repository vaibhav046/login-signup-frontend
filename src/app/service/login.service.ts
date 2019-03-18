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

  login(email: string): Observable<Object> {

    return this.http
      .get(LoginService.API_URL + 'login/' + email)
      .pipe(
        map(x => {
          console.log(JSON.stringify(x['user'].email));
          this.userData = User.getInstance(x['user'].email, x['user'].password, x['user'].username);
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
