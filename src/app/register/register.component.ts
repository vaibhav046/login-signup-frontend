import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
  registerData = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    username: new FormControl('')
  });

  success: Boolean = false;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    this.loginService.register(this.registerData).subscribe((x) => {
      if (!!x || x !== null) {
        this.success = true;
      }
      console.log(JSON.stringify(x));
    });
  }

  get password() {
    return this.registerData.get('password');
  }

  get email() {
    return this.registerData.get('email');
  }

  get username() {
    return this.registerData.get('username');
  }
}
