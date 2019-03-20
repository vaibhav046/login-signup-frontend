import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { LoginService } from '../service/login.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  loginData = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });
  userData: any = null;
  profile: Boolean = false;
  constructor(private loginService: LoginService, private location: Location) { }

  ngOnInit() {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    // console.warn(this.loginData.value['email']);
    this.loginService.login(this.loginData.value).subscribe((x) => {
      // console.log(x);
      if (!!x || x !== null) {
        this.profile = true;
        this.location.replaceState('login', 'loggedIn=true');

        this.userData = x;
      }
    });
  }

  get password() {
    return this.loginData.get('password');
  }

  get email() {
    return this.loginData.get('email');
  }

}
