import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private lookupsServices: LookupsService,
    private router: Router) { }

  BestSellerProducts: Product[] = []
  BestSellerDisplayed: Product[] = []
  BestSellerIndex: number = 0;
  searchValue: string = '';
  categories: Category[] = [];

  ngOnInit(): void {
    this.fetchProducts();
    this.fetchCategories();
  }

  fetchProducts() {
    this.productService.getCommercialProducts('top', 0).subscribe((data: Product[]) => {
      this.BestSellerProducts = data;
      this.BestSellerDisplayed = this.BestSellerProducts.slice(0, 4);
      console.log(this.BestSellerDisplayed);
    });
  }

  fetchCategories() {
    this.lookupsServices.fetchCategories().subscribe((data: Category[]) => {
      this.categories = data;
    })
  }

  rotateProducts() {
    if(this.BestSellerIndex === 0) {
      this.BestSellerDisplayed = this.BestSellerProducts.slice(4);
      this.BestSellerIndex = 1;
    }
    else if(this.BestSellerIndex === 1) {
      this.BestSellerDisplayed = this.BestSellerProducts.slice(0, 4);
      this.BestSellerIndex = 0;
    }
  }

  onSearchClick() {
    if (this.searchValue != null && this.searchValue != '') this.router.navigate(['buyer/search', this.searchValue]);
  }

}
