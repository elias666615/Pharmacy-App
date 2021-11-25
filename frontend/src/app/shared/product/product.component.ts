import { Component, Input, OnInit } from '@angular/core';
import {Product} from '../models/productmodels';
@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product!: Product;
  price!: number;
  constructor() { }


  ngOnInit(): void {
    if(this.product.discount > 0) {
      this.price = Math.round(this.product.price - (this.product.price * this.product.discount / 100));
    }
  }

}
