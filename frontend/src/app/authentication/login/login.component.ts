import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginInfo, Store, UserInfo } from '../models/userModels';
import { AuthenticationService } from '../services/authentication.service';
import { UserDataManager } from '../services/userDataManager';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginFailed: boolean = false;
  StayLoggedIn: boolean = false;
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],

  });
  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    if(this.loginForm.valid) {
      const data = new FormData();
      data.append('email', this.loginForm.controls['email'].value);
      data.append('password', this.loginForm.controls['password'].value);

      this.authService.login(data).subscribe((data: LoginInfo) => {
        const localStorage = window.localStorage;
        localStorage.setItem('email', data.email);
        localStorage.setItem('access', data.Accesstoken);
        localStorage.setItem('refresh', data.Refreshtoken);

        console.log(this.StayLoggedIn);
        if(this.StayLoggedIn === true) {
          localStorage.setItem('email', data.email);
          localStorage.setItem('access', data.Accesstoken);
          localStorage.setItem('refresh', data.Refreshtoken);
        }

        this.authService.fetchUser(localStorage.getItem('email')!).subscribe((data: UserInfo) =>{
          localStorage.setItem('role', data.role.code);
          localStorage.setItem('phone_number', data.phone_number);
          if(data.role.code === 'BYR') {
            localStorage.setItem('first_name', data.first_name!);
            localStorage.setItem('last_name', data.last_name!);
          }
          if(localStorage.getItem('role') === 'SLR') {
            this.authService.fetchStore(localStorage.getItem('email')!).subscribe((data: Store) => {
              localStorage.setItem('store', data.id.toString());
              this.router.navigate(['/seller/home']);
            });   
          }
          else if (localStorage.getItem('role') === 'BYR') {
            this.router.navigate(['/buyer/home']);
          }
        });
      }, (error: Error) => {this.loginFailed = true;});
    }
  }
}
