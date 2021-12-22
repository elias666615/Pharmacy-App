import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {Product} from '../models/productmodels';
@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product!: Product;

  @Output() updateClicked = new EventEmitter<Product>();
  @Output() deleteClicked = new EventEmitter<Product>();

  baseUrl: string = 'http://127.0.0.1:8000';
  price!: number;
  constructor() { }


  ngOnInit(): void {
    if(this.product.discount > 0) {
      this.price = Math.round(this.product.price_per_unit - (this.product.price_per_unit * this.product.discount / 100));
    }
  }

  get showToolTip() {
    return this.product.name.length <= 12;
  }

}
