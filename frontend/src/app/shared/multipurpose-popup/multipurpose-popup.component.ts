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

  constructor(
    public dialogRef: MatDialogRef<MultipurposePopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {name: String, action:'delete_p'},
  ) { }

  ngOnInit(): void {
    if(this.data.action === 'delete_p') {
      this.title = 'Delete Product';
      this.message = 'Are you sure you want to delete this products?';
    }
  }

  close(d: boolean) {
    this.dialogRef.close(d);
  }

}
