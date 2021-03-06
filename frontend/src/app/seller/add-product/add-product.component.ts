import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { SubCategory, Tag, Type } from 'src/app/shared/models/productmodels';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { LookupsService } from 'src/app/shared/services/lookups.service';
import { ProductService } from 'src/app/shared/services/product.service';
import { AddProduct, Product } from 'src/app/shared/models/productmodels';
import { createOfflineCompileUrlResolver } from '@angular/compiler';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  @Input() types!: Type[];
  @Input() allCategories!: SubCategory[];
  allTags: Tag[] = [];

  @Output() productAdded = new EventEmitter<Product>();
  @Output() drawerClosed = new EventEmitter<boolean>();

  productForm = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(100)]],
    description: ['', Validators.required],
    price: ['', [Validators.required, Validators.min(0), Validators.max(100000000)]],
    discount: ['0', [Validators.required, Validators.min(0), Validators.max(100)]],
    quantity: ['', [Validators.required, Validators.min(0), Validators.max(1000000000)]],
    categories: ['', Validators.required],
    tags: [''],
    type: ['', Validators.required],
  });

  imageUrl!: any;

  @ViewChild('fileBrowseRef') fileBrowseRef: any;
  imageFileName: string = '';

  constructor(
    private fb: FormBuilder,
    private lookupsService: LookupsService,
    private productService: ProductService,) {
  }

  ngOnInit(): void {
    this.fetchTags();
  }

  addTag() {
    if(this.productForm.controls['new_tag'].value != null && this.productForm.controls['new_tag'].value != '') {
      const data: object = {description: this.productForm.controls['new_tag'].value}
      this.lookupsService.addTag(data).subscribe(data => {
        this.allTags.push(data);
        this.productForm.controls['new_tag'].setValue('');
      });
    }
  }

  fetchTags() {
    this.lookupsService.fetchTags().subscribe((data: Tag[]) => this.allTags = data);
  }

  addProduct() {
    if (this.productForm.valid) {

      const creationForm = new FormData();
      creationForm.append('name', this.productForm.controls['name'].value);
      creationForm.append('description', this.productForm.controls['description'].value);
      creationForm.append('price_per_unit', this.productForm.controls['price'].value);
      creationForm.append('discount', this.productForm.controls['discount'].value);
      creationForm.append('initial_quantity', this.productForm.controls['quantity'].value);
      creationForm.append('image', this.imageUrl);
      creationForm.append('categories', this.productForm.controls['categories'].value);
      creationForm.append('tags', this.productForm.controls['tags'].value);
      creationForm.append('type', this.productForm.controls['type'].value);
      creationForm.append('store', localStorage.getItem('store')!);


      this.productService.addProduct(creationForm).subscribe((data: Product) => this.productAdded.emit(data));
    }
  }

  fileBrowserHandler(event: any) {
    if (!event.target.files[0] || event.target.files[0].length == 0) {
      return;
    }

    var mimeType = event.target.files[0].type;

    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    this.imageUrl = event.target.files[0];
    this.imageFileName = event.target.files[0].name;
    console.log(event.target.files[0])
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (_event) => {
      //this.imageUrl = reader.result;
    };
  }

  browseImage() {
    this.fileBrowseRef.nativeElement.click();
  }
}

