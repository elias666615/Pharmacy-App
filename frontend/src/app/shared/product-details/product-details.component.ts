import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserDataManager } from 'src/app/authentication/services/userDataManager';
import { Product, Order, CreateOrder } from '../models/productmodels';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  loading: boolean = true;
  id!: number;
  product!: Product;
  price!: number;
  baseURL: string = 'http://127.0.0.1:8000';

  orderQuantity: number = 0;

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
    });
    this.fetchProduct();
  }

  get total() {
    return this.product.price_per_unit * this.orderQuantity;
  }

  fetchProduct() {
    this.productService.getProductById(this.id).subscribe((data: Product) => {
      this.product = data;
      if(this.product.discount > 0) {
        this.price = Math.round(this.product.price_per_unit - (this.product.price_per_unit * this.product.discount / 100));
      }
      this.loading = false;});
  }

  addToOrders() {
    if(this.orderQuantity > 0) {
      console.log(localStorage.getItem('email'));
      let order: CreateOrder = {product: this.product.id, user: localStorage.getItem('email')!, quantity: this.orderQuantity};
      this.productService.createOrder(order).subscribe(data => console.log(data));

    }
  }
}
