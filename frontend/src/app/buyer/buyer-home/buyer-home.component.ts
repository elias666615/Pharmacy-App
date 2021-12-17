import { Component, OnInit } from '@angular/core';
import { Category, Product } from 'src/app/shared/models/productmodels';
import { LookupsService } from 'src/app/shared/services/lookups.service';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-buyer-home',
  templateUrl: './buyer-home.component.html',
  styleUrls: ['./buyer-home.component.css']
})
export class BuyerHomeComponent implements OnInit {

  constructor(
    private productService: ProductService,
    private lookupsServices: LookupsService,) { }

  products: Product[] = []
  searchValue: string = '';
  categories: Category[] = [];

  ngOnInit(): void {
    this.fetchProducts();
    this.fetchCategories();
  }

  fetchProducts() {
    this.productService.getCommercialProducts('top', 0).subscribe((data: Product[]) => this.products = data.splice(0, 4));
  }

  fetchCategories() {
    this.lookupsServices.fetchCategories().subscribe((data: Category[]) => {
      this.categories = data;
    })
  }

}
