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
        opacity: '0',
      })),
      transition('alive => dead', [animate('0.2s')]),
    ])
  ]
})
export class OrderItemComponent implements OnInit {

  baseUrl: string = 'http://127.0.0.1:8000';

  alive: boolean = true;

  role: string = localStorage.getItem('role')!;

  @Output() accepted = new EventEmitter<number>();
  @Output() rejected = new EventEmitter<number>();
  @Output() deliver = new EventEmitter<number>();

  @Input() order!: Order;
  order_date: string = '';
  order_time: string = '';
  constructor() { }

  ngOnInit(): void {
    let date_time = this.order.order_date.split('T');
    this.order_date = date_time[0];
    this.order_time = date_time[1].substring(0, 5);
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  async accept() {
    this.alive = false;
    await this.delay(201);
    this.accepted.emit(this.order.id);
  }

  ngOnDestroy() {
    this.alive = false;
    console.log('testing the destroy');
  }
}
