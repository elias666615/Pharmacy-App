import { RIGHT_ARROW } from '@angular/cdk/keycodes';
import { Component, OnInit } from '@angular/core';
import { enableDebugTools } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication/services/authentication.service';
import { UserDataManager } from 'src/app/authentication/services/userDataManager';
import { Product, Order, CreateOrder, Rating } from '../models/productmodels';
import { LookupsService } from '../services/lookups.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  loading: boolean = true;
  id!: number;
  product!: Product;
  price!: number;
  baseURL: string = 'http://127.0.0.1:8000';
  orders_num!: number;
  rating_num!: number;
  rating: number = 0;
  review: string = '';

  allRatings: Rating[] = [];

  get ratingDisabled(): boolean {
    console.log(this.orders_num, this.rating_num);
    return this.orders_num <= 0 || (this.orders_num > 0 && this.rating_num > 0);
  }

  get submitDisabled(): boolean {
    return this.rating <= 0;
  }

  orderQuantity: number = 0;

  constructor(
    private route: ActivatedRoute, 
    private productService: ProductService,
    private authService: AuthenticationService,
    private lookupsService: LookupsService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
    });
    this.fetchProduct();
  }

  get total() {
    return (this.product.price_per_unit - (this.product.price_per_unit * this.product.discount / 100)) * this.orderQuantity;
  }

  get addButtonDisabled() {
    return this.orderQuantity <= 0;
  }

  fetchOrder() {
    this.productService.fetchOrderByUserAndProduct(localStorage.getItem('email')!, this.product.id).subscribe((data: Order[]) => {
      this.orders_num = data.length;
    });
  }

  fetchRating() {
    this.productService.fetchRatingByUserAndProduct(this.product.id, localStorage.getItem('email')!).subscribe((data: Rating[]) => {
      this.rating_num = data.length;
    })
  }

  fetchAllRatings() {
    this.productService.fetchRatingsByProduct(this.product.id).subscribe((data: Rating[]) => {this.allRatings = data});
  }

  fetchProduct() {
    this.productService.getProductById(this.id).subscribe((data: Product) => {
      this.product = data;
      if(this.product.discount > 0) {
        this.price = Math.round(this.product.price_per_unit - (this.product.price_per_unit * this.product.discount / 100));
      }
      this.fetchAllRatings();
      this.fetchOrder();
      this.fetchRating();
      this.loading = false;});
  }

  addToOrders() {
    if(this.orderQuantity > 0) {
      let order: CreateOrder = {product: this.product.id, user: localStorage.getItem('email')!, quantity: this.orderQuantity};
      this.productService.createOrder(order).subscribe(data => {
        this.orderQuantity = 0;
      });
    }
  }

  onRated(rating: number) {
    this.rating = rating;
  }

  submitRating() {
    const data: object = {
      user: localStorage.getItem('email'),
      product: this.product.id,
      rating_number: this.rating,
      review: this.review
    }
    this.productService.addRating(data).subscribe(rating => {
      this.allRatings.push(rating);
      const new_rating_num = 1 + this.product.rating_num;
      console.log("new rating num", new_rating_num);
      const new_overall = ((this.product.overall_rating * this.product.rating_num) + this.rating) / new_rating_num;
      console.log(new_overall);
      const updateForm = new FormData();
      updateForm.append('id', JSON.stringify(this.product.id));
      updateForm.append('update_type', 'change_rating');
      updateForm.append('rating_num', JSON.stringify(new_rating_num));
      updateForm.append('overall_rating', JSON.stringify(Math.round(new_overall)));
      this.product.overall_rating = new_overall;
      this.productService.updateProduct(updateForm).subscribe(data => {
        const new_store_rating = ((this.product.store.rating * this.product.store.rating_num) + this.rating) / ++this.product.store.rating_num;
        const updatStoreData: object = {
          id: this.product.store.id,
          update_type: 'rating',
          rating: JSON.stringify(Math.round(new_store_rating)),
          rating_num: JSON.stringify(++(this.product.store.rating_num)),
        }
        this.authService.updateStore(updatStoreData).subscribe();
        this.product.categories.forEach(cat => {
          const new_r = ((cat.rating * cat.rating_num) + this.rating) / ++data.rating_num;
          const new_categroy_rating: object = {
            id: cat.id,
            rating: JSON.stringify(Math.round(new_r)),
            rating_num: JSON.stringify(++(cat.rating_num)),
          }
          this.lookupsService.updateCategory(data).subscribe();
        });
      });

      const update_category_data: object = {

      }
      this.rating_num++;
    });
  }
}
