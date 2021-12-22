import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/shared/models/productmodels';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit {

  search: string = '';
  products: Product[] = [];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.search = params.get('search')!;
    });
    this.fetchProducts();
  }

  fetchProducts() {
    this.productService.searchCommercialProducts('search', this.search).subscribe(data => {
      this.products = data;
    })
  }

}
