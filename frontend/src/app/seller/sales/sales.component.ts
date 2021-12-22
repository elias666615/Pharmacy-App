import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthenticationService } from 'src/app/authentication/services/authentication.service';
import { UserDataManager } from 'src/app/authentication/services/userDataManager';
import { Order } from 'src/app/shared/models/productmodels';
import { OrderDetailsComponent } from 'src/app/shared/order-details/order-details.component';
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

  constructor(
    private productService: ProductService,
    private authService: AuthenticationService,
    public dialog: MatDialog,) { }

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
    this.waitAOrders = [];
    this.waitDOrders = [];
    this.deliveredOrders = [];
    this.rejectedOrders = [];
    this.allOrders.forEach(order => {
      if (order.state === 'wait_a') this.waitAOrders.push(order);
      else if (order.state === 'wait_d') this.waitDOrders.push(order);
      else if (order.state === 'del') this.deliveredOrders.push(order);
      else if (order.state === 'reject') this.rejectedOrders.push(order);
    });
  }

  acceptOrder(id: number) {
    const data = {id: id, state: 'wait_d'};
    this.productService.updateOrder(data).subscribe(data => this.fetchOrders());
  }

  rejectOrder(id: number) {
    const data = {id: id, state: 'reject'};
    this.productService.updateOrder(data).subscribe(data => this.fetchOrders());
  }

  deliverOrder(id: number) {
    const order = this.waitDOrders.find(o => o.id === id);
    this.updateStore(order!);
    const updateForm = new FormData();
      updateForm.append('id', JSON.stringify(order?.product.id));
      updateForm.append('update_type', 'update_quantity');
      updateForm.append('sold_quantity', JSON.stringify(++(order!.product.sold_quantity)));
      updateForm.append('quantity', JSON.stringify(--(order!.product.quantity)));

      this.productService.updateProduct(updateForm).subscribe(data => {
            const _data = {id: id, state: 'del'};
            this.productService.updateOrder(_data).subscribe(Data => this.fetchOrders());
      });
  }

  updateStore(order: Order) {
    const update_store_data: object =  {
        id: this.localStorage.getItem('store'),
        update_type: 'revenue',
        products_sold: ++(order!.product.store.products_sold),
        total_revenue: (order!.product.store.total_revenue + order!.price_per_unit * order!.quantity)
      }
      console.log('testing the update store');
      this.authService.updateStore(update_store_data).subscribe();
  }

  onOrderClick(order: Order) {
    const dialogRef = this.dialog.open(OrderDetailsComponent, {
      width: '550px',
      height: '540px',
      data: {order: order}
    });
  }

}
