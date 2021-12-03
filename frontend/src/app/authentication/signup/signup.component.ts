import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  role: string = 'user';
  selectedRole: string = 'user';

  constructor() { }

  ngOnInit(): void {
  }

  async pickSignUpRole(role: string) {
    this.role = role;
    await this.delay(10);
    this.selectedRole = role;
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

}
