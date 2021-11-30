import { Component, OnInit } from '@angular/core';
import { Product, SubCategory, Type } from '../../shared/models/productmodels';
import { FormControl } from '@angular/forms';
import { ProductService } from 'src/app/shared/services/product.service';
import { LookupsService } from 'src/app/shared/services/lookups.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { MatDialog } from '@angular/material/dialog';
import { MultipurposePopupComponent } from 'src/app/shared/multipurpose-popup/multipurpose-popup.component';
import { P } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('drawerOpenClose', [
      state ('drawer-open', style ({
        right: '0'
      })),
      state ('drawer-closed', style({
        right: '-600px'
      })),
      transition('drawer-closed => drawer-open', animate('0.2s')),
      transition('drawer-open => drawer-closed', animate('0.2s')),
    ]),
  ]
})
export class HomeComponent implements OnInit {
  searchValue: string = "";
  typeValue: string = "";
  categoryValue: string = "";
  sortValue: string = "name";

  productToUpdate: Product | undefined;

  products: Product[] = []; 
  subcategories: SubCategory[] = [];
  types: Type[] = [];

  filteredProducts: Product[] = [];
  add_drawer_open: boolean = false;
  update_drawer_open: boolean = false;
  
  constructor(
    private productService: ProductService,
    private lookupsService: LookupsService,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog,) { }

  ngOnInit(): void {
    this.fetchProducts(2);
    this.fetchLookups();
    console.log(this.products)
  }

  toggleAddDrawer() {
    this.add_drawer_open = !this.add_drawer_open;
  }

  filterProducts() {
    if(this.searchValue === '' || this.searchValue === null) {
      this.filteredProducts = this.products;
    }
    else {
      this.filteredProducts = this.products.filter(product => product.name.toLowerCase().includes(this.searchValue.toLowerCase()));
    }
  }

  fetchProducts(store_id: number) {
    this.productService.getSellerProducts(store_id).subscribe((data: Product[]) => {this.products = data, this.filteredProducts = data} );
  }

  fetchLookups() {
    this.lookupsService.fetchSubCategories().subscribe((data: SubCategory[]) => this.subcategories = data);
    this.lookupsService.fetchTypes().subscribe((data: Type[]) => this.types = data);
  }

  addProduct(product: Product) {
    this.products.push(product);
    this.add_drawer_open = false;
    this._snackBar.open("Product successfully added","Okay", {duration: 5000});
  }

  updateProduct(product: Product) {
    console.log('test');
    this.productToUpdate = product;
    this.add_drawer_open = false;
    this.update_drawer_open = true;
  }

  closeUpdateDrawer() {
    this.update_drawer_open = false;
  }

  productUpdated(product: Product) {
    this.update_drawer_open = false;
    this.fetchProducts(2);
  }

  deleteProduct(product: Product) {
    const dialofRef = this.dialog.open(MultipurposePopupComponent, {
      width: '600px',
      data: {name: product.name, action:'delete_p'}
    });

    dialofRef.afterClosed().subscribe(result => {
      if(result === true) {
        this.productService.deleteProduct(product.id).subscribe(() => {
          this.fetchProducts(2);
        });
      }
    });
  }
}