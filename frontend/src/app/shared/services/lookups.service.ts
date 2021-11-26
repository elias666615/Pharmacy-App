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

  fetchTypes() {
    return this.http.get<Type[]>('http://127.0.0.1:8000/store/types/');
  }

  fetchSubCategories() {
    return this.http.get<SubCategory[]>('http://127.0.0.1:8000/store/subcategories/');
  }

  fetchTags() {
    return this.http.get<Tag[]>('http://127.0.0.1:8000/store/tags/');
  }
}
