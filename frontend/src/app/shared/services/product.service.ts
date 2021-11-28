import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { AddProduct, Product } from '../models/productmodels';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productUrl = 'http://127.0.0.1:8000/store/products/';

  constructor(private http: HttpClient) { }

  getSellerProducts(store_id: number) {
    return this.http.get<Product[]>(this.productUrl + '?store_id=' + store_id.toString());
  }

  addProduct(formData: FormData) {
    return this.http.post<Product>('http://127.0.0.1:8000/store/products/', formData);
  }

  updateProduct(formData: FormData) {
    return this.http.put<Product>('http://127.0.0.1:8000/store/products/', formData);
  }
}
