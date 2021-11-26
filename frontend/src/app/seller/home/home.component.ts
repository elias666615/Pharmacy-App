import { Component, OnInit } from '@angular/core';
import { Product, SubCategory, Type } from '../../shared/models/productmodels';
import { FormControl } from '@angular/forms';
import { ProductService } from 'src/app/shared/services/product.service';
import { LookupsService } from 'src/app/shared/services/lookups.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchValue: string = "";
  typeValue: string = "";
  categoryValue: string = "";
  sortValue: string = "name";

  products: Product[] = []; 
  subcategories: SubCategory[] = [];
  types: Type[] = [];

  filteredProducts: Product[] = this.products;
  add_drawer_open: boolean = false;
  update_drawer_open: boolean = false;
  
  constructor(
    private productService: ProductService,
    private lookupsService: LookupsService) { }

  ngOnInit(): void {
    this.fetchProducts(2);
    this.fetchLookups();
    console.log(this.products)
  }

  toggleAddDrawer() {
    this.add_drawer_open = !this.add_drawer_open;
  }

  filterProducts() {
  }

  fetchProducts(store_id: number) {
    this.productService.getSellerProducts(store_id).subscribe((data: Product[]) => this.products = data);
  }

  fetchLookups() {
    this.lookupsService.fetchSubCategories().subscribe((data: SubCategory[]) => this.subcategories = data);
    this.lookupsService.fetchTypes().subscribe((data: Type[]) => this.types = data);
  }
}