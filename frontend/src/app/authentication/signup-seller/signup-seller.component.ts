import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-signup-seller',
  templateUrl: './signup-seller.component.html',
  styleUrls: ['./signup-seller.component.css']
})
export class SignupSellerComponent implements OnInit {

  signupForm = this.fb.group({
    pharmacyname: ['', [Validators.required]],
    phone: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    confirmpassword: ['', [Validators.required]],
    city: ['', [Validators.required]],
    street: ['', [Validators.required]],
    location: ['', [Validators.required]],
    account_holder_name: ['', [Validators.required]],
    account_number: ['', [Validators.required]],
    name_of_bank: ['', [Validators.required]],
  });

  signupDisabled: boolean = true;
  termsChecked: boolean = false;

  @ViewChild('fileBrowseRef') fileBrowseRef: any;
  imageFileName: string = '';
  imageUrl!: any;

  latitude: number = 33.8938;
  longitude: number = 35.5018;

  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private router: Router) { }

  ngOnInit(): void {
    this.setCookie('access', 'eliasbouslewan', 10);
  }

  checkIfDisabled() {
    console.log('test');
    this.signupDisabled = !this.signupForm.valid || !this.termsChecked;
    console.log("form valid: ", this.signupForm.valid);
    console.log('checked: ', this.termsChecked);
  }

  get passwordsMatch() {
    return this.signupForm.controls['password'].value === this.signupForm.controls['confirmpassword'].value;
  }

  fileBrowserHandler(event: any) {
    if (!event.target.files[0] || event.target.files[0].length == 0) {
      return;
    }

    var mimeType = event.target.files[0].type;

    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    this.imageUrl = event.target.files[0];
    this.imageFileName = event.target.files[0].name;
    console.log(event.target.files[0])
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (_event) => {
      //this.imageUrl = reader.result;
    };
  }

  browseImage() {
    this.fileBrowseRef.nativeElement.click();
  }

  onChoseLocation(event: any) {
    this.latitude = event.coords.lat;
    this.longitude = event.coords.long;
  }
  
  private setCookie(name: string, value: string, expireDays: number, path: string = '') {
    let d:Date = new Date();
    d.setTime(d.getTime() + expireDays * 24 * 60 * 60 * 1000);
    let expires:string = `expires=${d.toUTCString()}`;
    let cpath:string = path ? `; path=${path}` : '';
    document.cookie = `${name}=${value}; ${expires}${cpath}`;
    localStorage.setItem('key', 'eliasbouselwan');
  }

  signUp() {
    if(this.signupForm.valid) {
      const data = new FormData();
      data.append('storename', this.signupForm.controls['pharmacyname'].value);
      data.append('email', this.signupForm.controls['email'].value);
      data.append('password', this.signupForm.controls['password'].value);
      data.append('location', this.signupForm.controls['location'].value);
      data.append('phone_number', this.signupForm.controls['phone'].value);
      data.append('city', this.signupForm.controls['city'].value);
      data.append('street', this.signupForm.controls['street'].value);
      data.append('location', this.signupForm.controls['location'].value);
      data.append('account_number', this.signupForm.controls['account_number'].value);
      data.append('account_holder_name', this.signupForm.controls['account_holder_name'].value);
      data.append('name_of_bank', this.signupForm.controls['name_of_bank'].value);
      data.append('role', 'SLR');
      console.log(data);

      this.authService.signup(data).subscribe(data => this.router.navigate(['/login']));
    }
  }
}
