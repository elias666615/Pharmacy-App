import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-signup-user',
  templateUrl: './signup-user.component.html',
  styleUrls: ['./signup-user.component.css']
})
export class SignupUserComponent implements OnInit {

  signupForm = this.fb.group({
    firstname: ['', [Validators.required]],
    lastname: ['', [Validators.required]],
    phone: ['', [Validators.required]],
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
    confirmpassword: ['', [Validators.required]]
  })

  signupDisabled: boolean = true;
  termsChecked: boolean = false;

  constructor(private fb: FormBuilder,
            private authService: AuthenticationService,
            private router: Router) { }

  ngOnInit(): void {
  }

  checkIfDisabled() {
    console.log('test');
    this.signupDisabled = !this.signupForm.valid || !this.termsChecked;
    console.log("form valid: ", this.signupForm.valid);
    console.log('checked: ', this.termsChecked);
  }

  signUp() {
    if(this.signupForm.valid) {
      const data = new FormData();
      data.append('email', this.signupForm.controls['email'].value);
      data.append('password', this.signupForm.controls['password'].value);
      data.append('first_name', this.signupForm.controls['firstname'].value);
      data.append('last_name', this.signupForm.controls['lastname'].value);
      data.append('phone_number', this.signupForm.controls['phone'].value);
      data.append('role', 'BYR');
      console.log(data);

      this.authService.signup(data).subscribe(data => {
        this.router.navigate(['/login']);
      });
    }
  }

}
