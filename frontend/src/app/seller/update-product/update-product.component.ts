import { COMMA, ENTER, L } from '@angular/cdk/keycodes';
import { ThrowStmt } from '@angular/compiler';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Category, Product, SubCategory, Tag, Type } from 'src/app/shared/models/productmodels';
import { LookupsService } from 'src/app/shared/services/lookups.service';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  @Input() product!: Product;
  @Input() types!: Type[];
  @Input() allCategories!: Category[];
  allTags: Tag[] = [];

  @Output() productUpdated = new EventEmitter<Product>();
  @Output() drawerClosed = new EventEmitter<boolean>();

  productForm = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(100)]],
    description: ['', Validators.required],
    price: ['', [Validators.required, Validators.min(0), Validators.max(100000000)]],
    discount: ['0', [Validators.required, Validators.min(0), Validators.max(100)]],
    quantity: ['', [Validators.required, Validators.min(0), Validators.max(1000000000)]],
    categories: ['', Validators.required],
    tags: ['', Validators.required],
    type: ['', Validators.required],
    new_tag: [''],
  });

  imageUrl!: any;
  imageChanged: number = 0;

  @ViewChild('fileBrowseRef') fileBrowseRef: any;
  imageFileName: string = '';

  constructor(
    private fb: FormBuilder,
    private lookupsService: LookupsService,
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
    this.fetchTags();
  }

  initializeForm() {
    const cats: number[] = [];
    this.product.categories.forEach(c => cats.push(c.id));
    const tags: number[] = [];
    this.product.tags.forEach(t => tags.push(t.id))

    this.productForm.controls['name'].setValue(this.product.name);
    this.productForm.controls['description'].setValue(this.product.description);
    this.productForm.controls['categories'].setValue(cats);
    this.productForm.controls['tags'].setValue(tags);
    this.productForm.controls['discount'].setValue(this.product.discount);
    this.productForm.controls['price'].setValue(this.product.price_per_unit);
    this.productForm.controls['quantity'].setValue(this.product.initial_quantity);
    this.productForm.controls['type'].setValue(this.product.type.id);

    console.log(this.productForm.controls['tags'].value);
  }

  fetchTags() {
    this.lookupsService.fetchTags().subscribe((data: Tag[]) => {this.allTags = data; this.initializeForm();});
  }

  updateProduct() {
    if (this.productForm.valid) {

      const creationForm = new FormData();
      creationForm.append('update_type', 'all');
      creationForm.append('id', JSON.stringify(this.product.id));
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
      creationForm.append('picture_changed', JSON.stringify(this.imageChanged));


      this.productService.updateProduct(creationForm).subscribe((data: Product) => this.productUpdated.emit(data));
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
    this.imageChanged = 1;
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (_event) => {
      //this.imageUrl = reader.result;
    };
  }

  browseImage() {
    this.fileBrowseRef.nativeElement.click();
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

}
