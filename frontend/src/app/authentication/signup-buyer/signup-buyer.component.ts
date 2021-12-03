import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-signup-buyer',
  templateUrl: './signup-buyer.component.html',
  styleUrls: ['./signup-buyer.component.css'],
  animations: [
    trigger('selectUnselect', [
      state('selected', style({
        top: '0',
      })),
      state('unselected', style({
        top: '1000px',
      })),
      // transition('selected => unselected', [animate('0.1s')]),
      transition('unselected => selected', animate('0.25s')),
    ])
  ]
})
export class SignupBuyerComponent implements OnInit {
  pharmacySignupForm = this.fb.group({
    pharmacyname: ['', [Validators.required]],
    phone: ['', [Validators.required]],
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
    confirmPassword: ['', [Validators.required]],
    location: ['', [Validators.required]],
  });

  userSignupForm = this.fb.group({
    firstname: ['', [Validators.required]],
    lastname: ['', [Validators.required]],
    phone: ['', [Validators.required]],
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
    confirmpass: ['', [Validators.required]]
  })

  signupDisabled: boolean = true;
  @ViewChild('termCheck') TermCheck: any;
  @ViewChild('fileBrowseRef') fileBrowseRef: any;
  imageFileName: string = '';

  role: string = 'user';
  selectedRole: string = 'user';

  checkIfDisabled() {
    console.log('test');
    // this.signupDisabled = !this.signupForm.valid || !this.TermCheck.nativeElement.checked;
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  imageUrl!: any;

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

  async pickSignUpRole(role: string) {
    this.role = role;
    await this.delay(10);
    this.selectedRole = role;
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}
}
