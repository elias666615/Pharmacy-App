import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/productmodels';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-buyer-home',
  templateUrl: './buyer-home.component.html',
  styleUrls: ['./buyer-home.component.css']
})
export class BuyerHomeComponent implements OnInit {

  constructor(private productService: ProductService) { }

  products: Product[] = []

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productService.getSellerProducts(2, '', 'name', '', '').subscribe((data: Product[]) => this.products = data);
  }

}
