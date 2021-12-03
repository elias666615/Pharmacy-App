import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  StayLoggedIn: boolean = false;
  loginForm = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],

  });
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
