import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

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

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  checkIfDisabled() {
    console.log('test');
    this.signupDisabled = !this.signupForm.valid || !this.termsChecked;
    console.log("form valid: ", this.signupForm.valid);
    console.log('checked: ', this.termsChecked);
  }

}
