import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Order } from '../models/productmodels';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css'],
  animations: [
    trigger('kill', [
      state('alive', style({
      })),
      state('dead', style({
        height: '0px',
      })),
      transition('alive => dead', [animate('0.1s')]),
    ])
  ]
})
export class OrderItemComponent implements OnInit {

  baseUrl: string = 'http://127.0.0.1:8000';

  @Input() alive: boolean | undefined = true;

  role: string = localStorage.getItem('role')!;

  @Output() accepted = new EventEmitter<number>();
  @Output() rejected = new EventEmitter<number>();
  @Output() delivered = new EventEmitter<number>();
  @Output() canceled = new EventEmitter<number>();

  @Input() order!: Order;
  @Input() new: boolean = false;
  order_date: string = '';
  order_time: string = '';
  constructor() { }

  ngOnInit(): void {}

  get datetime(): string {
    if(this.order.state == 'new') {
      let datetime = this.order.place_at.split('T');
      return `order placed on ${datetime[0]} at ${datetime[1].substring(0, 5)}`;
    }
    else if (this.order.state == 'wait_a') {
      let datetime = this.order.checked_out_at.split('T');
      return `order checked out on ${datetime[0]} at ${datetime[1].substring(0, 5)}`;
    }
    else if (this.order.state == 'wait_d') {
      let datetime = this.order.accep_reject_at.split('T');
      return `order accepted on ${datetime[0]} at ${datetime[1].substring(0, 5)}`;
    }
    else if (this.order.state == 'reject') {
      let datetime = this.order.accep_reject_at.split('T');
      return `order rejected on ${datetime[0]} at ${datetime[1].substring(0, 5)}`;
    }
    else if (this.order.state == 'del') {
      let datetime = this.order.delivered_at.split('T');
      return `order delivered on ${datetime[0]} at ${datetime[1].substring(0, 5)}`;
    }
    return '';
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  async accept() {
    this.alive = false;
    await this.delay(100);
    this.accepted.emit(this.order.id);
  }

  async reject() {
    this.alive = false;
    await this.delay(100);
    this.rejected.emit(this.order.id);
  }

  async deliver() {
    this.alive = false;
    await this.delay(100);
    this.delivered.emit(this.order.id);

  }

  async cancel() {
    this.canceled.emit(this.order.id);
  }
}
