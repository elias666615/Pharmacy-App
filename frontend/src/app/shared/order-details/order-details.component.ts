import { L } from '@angular/cdk/keycodes';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Order } from '../models/productmodels';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<OrderDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {order: Order}) { }

  ngOnInit(): void {
  }

  datetime(type: string) {
    if (type === 'placed') {
      if(this.data.order.place_at === null) return null;
      let datetime = this.data.order.place_at.split('T');
      return `order placed on ${datetime[0]} at ${datetime[1].substring(0, 5)}`;
    }
    else if (type === 'checked') {
      if(this.data.order.checked_out_at === null) return null;
      let datetime = this.data.order.checked_out_at.split('T');
      return `order checked out on ${datetime[0]} at ${datetime[1].substring(0, 5)}`;
    }
    else if (type === 'accepted') {
      if(this.data.order.accep_reject_at === null || this.data.order.state === 'reject') return null;
      let datetime = this.data.order.accep_reject_at.split('T');
      return `order accepted on ${datetime[0]} at ${datetime[1].substring(0, 5)}`;
    }
    else if (type === 'rejected') {
      if(this.data.order.accep_reject_at === null || this.data.order.state != 'reject') return null;
      let datetime = this.data.order.accep_reject_at.split('T');
      return `order rejected on ${datetime[0]} at ${datetime[1].substring(0, 5)}`;
    }
    else if (type === 'delivered') {
      if (this.data.order.delivered_at === null) return null;
      let datetime = this.data.order.delivered_at.split('T');
      return `order delivered on ${datetime[0]} at ${datetime[1].substring(0, 5)}`;
    }
    return null;
  }


}
