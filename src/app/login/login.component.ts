import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/http/services/auth.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  data: any;
  loginForm!: FormGroup;
  constructor(private auth: AuthService) {}

  // getUsers() {
  //   this.auth.getUsers().subscribe(
  //     (x) => console.log('Observer got a next value: ' + x),
  //     (err) => console.error(err.message),
  //     () => console.log('Observer got a complete notification')
  //   );
  // }

  // login method
  login() {
    const { email, password } = this.loginForm.value;
    this.auth
      .login({
        email,
        password,
      })
      .subscribe(
        (res: any) => {
          if (!res.hasError) {
            this.data = res.data;
            // deal with login
            console.log(res);
          } else {
            console.log('Error happend');
          }
        },
        (err) => console.error(err.message)
      );
  }

  ngOnInit(): void {
    // login form
    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }
}
