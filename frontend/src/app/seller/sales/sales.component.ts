import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { UserDataManager } from 'src/app/authentication/services/userDataManager';
import { Order } from 'src/app/shared/models/productmodels';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  localStorage = window.localStorage;

  allOrders: Order[] = [];
  waitAOrders: Order[] = [];
  waitDOrders: Order[] = [];
  rejectedOrders: Order[] = [];
  deliveredOrders: Order[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.fetchOrders();
  }

  fetchOrders() {
    this.productService.fetchOrdersByStore(Number(this.localStorage.getItem('store'))).subscribe((data: Order[]) => {
      console.log(data);
      this.allOrders = data;
      this.categorizeOrders();
    });
  }

  categorizeOrders() {
    this.allOrders.forEach(order => {
      if (order.state === 'wait_a') this.waitAOrders.push(order);
      else if (order.state === 'wait_d') this.waitDOrders.push(order);
      else if (order.state === 'del') this.deliveredOrders.push(order);
      else if (order.state === 'reject') this.rejectedOrders.push(order);
    });
  }

  acceptOrder(id: number) {
    const data = {id: id, state: 'wait_d'};
    this.productService.updateOrder(data).subscribe(data => console.log(data));
    const order = this.waitAOrders.find(order => order.id === id);
    if(order != undefined) {
      const idx = this.waitAOrders.indexOf(order);
      order.state = 'wait_d';
      this.waitAOrders.splice(idx, 1);
      this.waitDOrders.push(order);
    }
  }

  rejectOrder(id: number) {
    const data = {id: id, state: 'reject'};
    this.productService.updateOrder(data).subscribe(data => console.log(data));
    const order = this.waitAOrders.find(order => order.id === id);
    if(order != undefined) {
      const idx = this.waitAOrders.indexOf(order);
      order.state = 'reject';
      this.waitAOrders.splice(idx, 1);
      this.rejectedOrders.push(order);
    }
  }

  deliverOrder(id: number) {
    const data = {id: id, state: 'del'};
    this.productService.updateOrder(data).subscribe(data => console.log(data));
    const order = this.waitDOrders.find(order => order.id === id);
    if(order != undefined) {
      const idx = this.waitDOrders.indexOf(order);
      order.state = 'del';
      this.waitDOrders.splice(idx, 1);
      this.deliveredOrders.push(order);
    }
  }

}
