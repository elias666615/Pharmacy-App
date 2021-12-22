import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-multipurpose-popup',
  templateUrl: './multipurpose-popup.component.html',
  styleUrls: ['./multipurpose-popup.component.css']
})
export class MultipurposePopupComponent implements OnInit {

  title: string = '';
  message: string = '';
  action: string = '';

  constructor(
    public dialogRef: MatDialogRef<MultipurposePopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {name: String, action: String},
  ) { }

  ngOnInit(): void {
    if(this.data.action === 'delete_p') {
      this.action = 'Delete';
      this.title = 'Delete Product';
      this.message = 'Are you sure you want to delete this products?';
    }
    else if(this.data.action === 'delete_o') {
      this.action = 'Cancel Order';
      this.title = 'Cancel Order';
      this.message = 'Are you sure you want to cancel this order?';
    }
  }

  close(d: boolean) {
    this.dialogRef.close(d);
  }

}
