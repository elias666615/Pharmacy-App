import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/shared/models/productmodels';
import { MultipurposePopupComponent } from 'src/app/shared/multipurpose-popup/multipurpose-popup.component';
import { ProductService } from 'src/app/shared/services/product.service';
import { MatDialog } from '@angular/material/dialog';
import { AuthenticationService } from 'src/app/authentication/services/authentication.service';
import { CardInformationComponent } from 'src/app/authentication/card-information/card-information.component';

@Component({
  selector: 'app-buyer-orders',
  templateUrl: './buyer-orders.component.html',
  styleUrls: ['./buyer-orders.component.css']
})
export class BuyerOrdersComponent implements OnInit {

  Allorders: Order[] = [];
  newOrders: Order[] = [];
  waitAOrders: Order[] = [];
  waitDOrders: Order[] = [];
  deliveredOrders: Order[] = [];
  rejectedOrders: Order[] = [];
  total: number = 0;

  paymentMethod: string = 'cash';

  constructor(
    private productService: ProductService,
    private authService: AuthenticationService,
    public dialog: MatDialog,) { }

  ngOnInit(): void {
    this.fetchOrders();
  }

  get numberOfNewOrders(): number {
    return this.newOrders.length;
  }

  
  ngOnChanges() {
    console.log('changes occured');
  }

  fetchOrders() {
    this.productService.fetchOrdersByUser(localStorage.getItem('email')!).subscribe((data: Order[]) => { 
      this.Allorders = data;
      this.categorizeOrders();
      this.calculateTotal();
    });
  }

  categorizeOrders() {
    this.Allorders.forEach(order => {
      if(order.state === 'new') this.newOrders.push(order);
      else if (order.state === 'wait_a') this.waitAOrders.push(order);
      else if (order.state === 'wait_d') this.waitDOrders.push(order);
      else if (order.state === 'del') this.deliveredOrders.push(order);
      else if (order.state === 'reject') this.rejectedOrders.push(order);
    })
  }

  calculateTotal() {
    this.total = 0;
    this.newOrders.forEach(order => {
      this.total += (order.price_per_unit * order.quantity);
    })
  }

  checkOut() {
    this.authService.fetchCardInfo(localStorage.getItem('email')!).subscribe(data => {
      if(data === null) {
        const dialofRef = this.dialog.open(CardInformationComponent, {
          width: '550px',
          height: '450px',
          data: {}
        });
    
        dialofRef.afterClosed().subscribe(result => {
          if(result === true) {
            this.newOrders.forEach(order => {
              const data: object = {id: order.id, state: 'wait_a'};
              this.productService.updateOrder(data).subscribe(data => {
                order.state = 'wait_a';
                this.waitAOrders.push(order);
              });
            });
            this.newOrders = [];
          }
        });
      }
    });
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  async deleteOrder(id: number) {
    const dialofRef = this.dialog.open(MultipurposePopupComponent, {
      width: '500px',
      height: '280px',
      data: {action:'delete_o'}
    });

    dialofRef.afterClosed().subscribe(result => {
      if(result === true) {
        this.productService.deleteOrder(id).subscribe(() => {
          var order = this.newOrders.find(o => o.id = id);
          if(order != undefined) {
            order.alive = false;
            this.delay(101);
            const idx = this.newOrders.indexOf(order);
            this.newOrders.splice(idx, 1);
            return;
          }
          order = this.waitAOrders.find(o => o.id = id);
          if(order != undefined) {
            console.log('found in wait A');
            order.alive = false;
            this.delay(101);
            const idx = this.waitAOrders.indexOf(order);
            this.waitAOrders.splice(idx, 1);
            return;
          }
          order = this.waitDOrders.find(o => o.id = id);
          if(order != undefined) {
            order.alive = false;
            this.delay(101);
            const idx = this.waitDOrders.indexOf(order);
            this.waitDOrders.splice(idx, 1);
            return;
          }
        });
      }
    });
  }
}
