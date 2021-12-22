import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store, UserInfo } from 'src/app/authentication/models/userModels';
import { AuthenticationService } from 'src/app/authentication/services/authentication.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  store!: Store;
  user!: UserInfo;
  loading1: boolean = true;
  loading2: boolean = true;

  saveStoreInfoDisabled: boolean = true;

  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.fetchStore();
    this.fetchUser();
  }

  fetchStore() {
    this.authService.fetchStore(localStorage.getItem('email')!).subscribe((data: Store) => {this.store = data; this.loading1 = false;});
  }

  fetchUser() {
    this.authService.fetchUser(localStorage.getItem('email')!).subscribe((data: UserInfo) => {this.user = data; this.loading2 = false;});
  }

  get cardNumber() {
    return this.store.account_number.slice(-4);
  }

}
