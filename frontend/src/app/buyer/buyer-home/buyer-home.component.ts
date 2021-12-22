import { ThrowStmt } from '@angular/compiler';
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

  BestSellerProducts: Product[] = [];
  BestSellerDisplayed: Product[] = [];
  BestSellerIndex: number = 0;
  searchValue: string = '';
  categories: Category[] = [];

  antibioticProducts: Product[] = [];
  antibioticDisplayed: Product[] = [];
  antibioticIndex: number = 0;
  
  laxitiveProducts: Product[] = [];
  laxitiveDisplayed: Product[] = [];
  laxitiveIndex: number = 0;

  antiemeticsProducts: Product[] = [];
  antiemeticsDisplayed: Product[] = [];
  antiemeticsIndex: number = 0;

  ngOnInit(): void {
    this.fetchProducts();
    this.fetchBestInAntibio();
    this.fetchBestInLaxitive();
    this.fetchBestInAntiEmetics();
    this.fetchCategories();
  }

  fetchProducts() {
    this.productService.getCommercialProducts('top', 0).subscribe((data: Product[]) => {
      this.BestSellerProducts = data;
      this.BestSellerDisplayed = this.BestSellerProducts.slice(0, 4);
    });
  }

  fetchBestInAntibio() {
    this.productService.getCommercialProducts('category', 6).subscribe((data: Product[]) => {
      this.antibioticProducts = data;
      this.antibioticDisplayed = this.antibioticProducts.slice(0, 4);
    })
  }

  fetchBestInLaxitive() {
    this.productService.getCommercialProducts('category', 17).subscribe((data: Product[]) => {
      this.laxitiveProducts = data;
      this.laxitiveDisplayed = this.laxitiveProducts.slice(0, 4);
    })
  }

  fetchBestInAntiEmetics() {
    this.productService.getCommercialProducts('category', 11).subscribe((data: Product[]) => {
      this.antiemeticsProducts = data;
      this.antiemeticsDisplayed = this.antiemeticsProducts.slice(0, 4);
    })
  }

  fetchCategories() {
    this.lookupsServices.fetchCategories().subscribe((data: Category[]) => {
      this.categories = data; console.log(data);
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

  rotateAntiBio() {
    if(this.antibioticIndex === 0) {
      this.antibioticDisplayed = this.antibioticProducts.slice(4);
      this.antibioticIndex = 1;
    }
    else if(this.antibioticIndex === 1) {
      this.antibioticDisplayed = this.antibioticProducts.slice(0, 4);
      this.antibioticIndex = 0;
    }
  }

  rotateLaxitives() {
    if(this.laxitiveIndex === 0) {
      this.laxitiveDisplayed = this.laxitiveProducts.slice(4);
      this.laxitiveIndex = 1;
    }
    else if(this.laxitiveIndex === 1) {
      this.laxitiveDisplayed = this.laxitiveProducts.slice(0, 4);
      this.laxitiveIndex = 0;
    }
  }

  rotateAntiEmetics() {
    if(this.antiemeticsIndex === 0) {
      this.antiemeticsDisplayed = this.antiemeticsProducts.slice(4);
      this.antiemeticsIndex = 1;
    }
    else if(this.antiemeticsIndex === 1) {
      this.antiemeticsDisplayed = this.antiemeticsProducts.slice(0, 4);
      this.antiemeticsIndex = 0;
    }
  }

  onSearchClick() {
    if (this.searchValue != null && this.searchValue != '') this.router.navigate(['buyer/search', this.searchValue]);
  }

}
