import { Injectable } from '@angular/core';
import { Category, SubCategory, Tag, Type } from '../models/productmodels';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LookupsService {

  constructor(private http: HttpClient) { }

  fetchCategories() {
    return this.http.get<Category[]>('http://127.0.0.1:8000/store/categories/');
  }

  updateCategory(data: object) {
    return this.http.put('http://127.0.0.1:8000/store/categories/', data);
  }

  fetchTypes() {
    return this.http.get<Type[]>('http://127.0.0.1:8000/store/types/');
  }

  fetchTags() {
    return this.http.get<Tag[]>('http://127.0.0.1:8000/store/tags/');
  }

  addTag(data: object) {
    return this.http.post<Tag>('http://127.0.0.1:8000/store/tags/', data);
  }
}
