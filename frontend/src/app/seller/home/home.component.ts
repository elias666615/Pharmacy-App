import { Component, OnInit } from '@angular/core';
import { Product } from '../../shared/models/productmodels';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  show: boolean = true;
  searchValue: string = "";
  products: Product[] = [
    new Product(1, "panadol", "blabla", "afdfa", 20000, 0, 3.3, [], []),
    new Product(1, "advil", "blabla", "afdfa", 400000, 0, 4.5, [], []),
    new Product(1, "xanax", "blabla", "afdfa", 300000, 50, 50, [], []),
    new Product(1, "aspirin", "blabla", "afdfa", 1000000, 25, 1.2, [], []),
    new Product(1, "viagra", "blabla", "afdfa", 3450000, 20, 4.9, [], []),
    new Product(1, "cocaine", "blabla", "afdfa", 280000, 0, 3.3, [], []),
    new Product(1, "mushrooms", "blabla", "afdfa", 670000, 45, 2.9, [], []),]; 

  add_drawer_open: boolean = false;
  update_drawer_open: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  toggleAddDrawer() {
    this.add_drawer_open = !this.add_drawer_open;
  }

}