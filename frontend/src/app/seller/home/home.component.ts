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
  searchValue: string = "fadfa";
  products: Product[] = [
    new Product(1, "panadol", "blabla", "afdfa", 43, 3.3, 3.3, [], []),
    new Product(1, "advil", "blabla", "afdfa", 43, 4.5, 4.5, [], []),
    new Product(1, "xanax", "blabla", "afdfa", 43, 5, 5, [], []),
    new Product(1, "aspirin", "blabla", "afdfa", 43, 1.2, 1.2, [], []),
    new Product(1, "viagra", "blabla", "afdfa", 43, 4.9, 4.9, [], []),
    new Product(1, "cocaine", "blabla", "afdfa", 43, 3.3, 3.3, [], []),
    new Product(1, "mushrooms", "blabla", "afdfa", 43, 2.9, 2.9, [], []),]; 

  constructor() { }

  ngOnInit(): void {
  }

}