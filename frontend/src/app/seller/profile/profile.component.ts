import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  store_name: string = 'pharmacia';
  store_location: string = 'lebanon, beirut, furn el cheback, maounet street, next to church';
  email: string = 'eliasbbb46@gmail.com';
  password: string = '***************';
  phone_number: string ='71038349';
  rating: number = 2.2;
  itemsSold: number = 1022;
  totalRevenue: number = 4509322000;

  storeNameCtrl: FormControl = new FormControl(this.store_name);
  storeLocationCtrl: FormControl = new FormControl(this.store_location);
  editing: string = '';

  @ViewChild('storeName') storeNameInput!: ElementRef<HTMLInputElement>;
  @ViewChild('storeLocation') storeLocationInput!: ElementRef<HTMLInputElement>;

  saveStoreInfoDisabled: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  editField(field: string) {
    this.editing = field;
    if(field === 'store_name') {
      setTimeout(()=>{
        this.storeNameInput.nativeElement.focus();
      }, 0);
    }
    else if (field === 'store_location') {
      setTimeout(() => {
        this.storeLocationInput.nativeElement.focus();
      }, 0)
    }
    
  }

  stopEditing(field: string) {
    this.editing = '';
    if(field === 'store_name') {
      this.store_name = this.storeNameCtrl.value;
    }
    else if (field === 'store_location') {
      this.store_location = this.storeLocationCtrl.value;
    }
  }


}
