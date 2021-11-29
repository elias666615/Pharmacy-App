import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-signup-buyer',
  templateUrl: './signup-buyer.component.html',
  styleUrls: ['./signup-buyer.component.css']
})
export class SignupBuyerComponent implements OnInit {
  signupForm = this.fb.group({

    firstname: [''],
    lastname: [''],
    phone: [''],
    email: [''],
    password: [''],
    confirmPassword: [''],
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
