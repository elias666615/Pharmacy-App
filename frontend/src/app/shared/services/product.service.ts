import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { AddProduct, CreateOrder, Order, Product } from '../models/productmodels';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productUrl = 'http://127.0.0.1:8000/store/products/';

  constructor(private http: HttpClient) { }

  getSellerProducts(store_id: number, search: string, sort: string, category: string, type: string) {
    return this.http.get<Product[]>(this.productUrl + 
      '?store_id=' + store_id.toString() + 
      '&search=' + search +
      '&sort=' + sort +
      '&category=' + category +
      '&type=' + type);
  }

  getProductById(id: number) {
    return this.http.get<Product>(this.productUrl + '?id=' + id.toString());
  }

  addProduct(formData: FormData) {
    return this.http.post<Product>('http://127.0.0.1:8000/store/products/', formData);
  }

  updateProduct(formData: FormData) {
    return this.http.put<Product>('http://127.0.0.1:8000/store/products/', formData);
  }

  deleteProduct(id: number) {
    return this.http.delete(`http://127.0.0.1:8000/store/products/?id=${id}`);
  }

  fetchOrdersByUser(user: string) {
    return this.http.get<Order[]>('http://127.0.0.1:8000/store/orders/?user=' + user);
  }

  fetchOrdersByStore(store_id: number) {
    return this.http.get<Order[]>('http://127.0.0.1:8000/store/orders/?store=' + store_id.toString());
  }

  createOrder(order: CreateOrder) {
    return this.http.post('http://127.0.0.1:8000/store/orders/', order);
  }

  updateOrder(data: object) {
    return this.http.put('http://127.0.0.1:8000/store/orders/', data);
  }
}
