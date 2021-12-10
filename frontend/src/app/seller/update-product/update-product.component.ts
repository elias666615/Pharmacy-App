import { COMMA, ENTER, L } from '@angular/cdk/keycodes';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Product, SubCategory, Tag, Type } from 'src/app/shared/models/productmodels';
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
  @Input() allCategories!: SubCategory[];
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
    type: ['', Validators.required],
  });

  imageUrl!: any;

  selectable = true;
  removable = true;

  separatorKeysCodes: number[] = [ENTER, COMMA];
  tagCtrl = new FormControl();
  tags: Tag[] = [];
  filteredTags: Tag[] = this.allTags;
  @ViewChild('tagInput') tagInput!: ElementRef<HTMLInputElement>;

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
    console.log(this.product.type);

    this.productForm.controls['name'].setValue(this.product.name);
    this.productForm.controls['description'].setValue(this.product.description);
    this.productForm.controls['categories'].setValue(this.product.categories);
    this.productForm.controls['discount'].setValue(this.product.discount);
    this.productForm.controls['price'].setValue(this.product.price_per_unit);
    this.productForm.controls['quantity'].setValue(this.product.initial_quantity);
    this.productForm.controls['type'].setValue(this.product.type);

    for(let i = 0; i < this.product.tags.length; i++) {
      let tag = this.allTags.find(tag => tag.id === this.product.tags[i]);
      let idx = undefined;
      if(tag != undefined) {
        idx = this.allTags.indexOf(tag);
        if(idx > -1) {
          this.tags.push(tag);
          this.allTags.splice(idx, 1);
        }
      }
    }
  }

  addCategory(event: MatChipInputEvent): void {
    // const value = (event.value || '').trim();

    // // Add our fruit
    // if (value) {
    //   this.categories.push(value);
    // }

    // // Clear the input value
    // event.chipInput!.clear();

    // this.categoryCtrl.setValue(null);
  }

  addTag(event: MatChipInputEvent): void {

  }

  removeTag(tag: Tag) {
    const index = this.tags.indexOf(tag);
    if (index >= 0) {
      this.tags.splice(index, 1);
    }
    this.allTags.push(tag);
  }

  selectedTag(event: MatAutocompleteSelectedEvent) {
    const tag = this.allTags.find(tag => tag.description == event.option.viewValue);
    if (tag != undefined) {
      this.tags.push(tag);
      this.tagInput.nativeElement.value = '';
      this.tagCtrl.setValue(null);
      const idx = this.allTags.indexOf(tag);
      if (idx > -1) this.allTags.splice(idx, 1);
    }
  }

  _filterTag(value: string) {
    console.log(this.filteredTags);
    const  filterValue = value.toLowerCase().trim();
    if(filterValue === "" || filterValue === null) this.filteredTags = this.allTags;
    else this.filteredTags = this.filteredTags.filter(tag => tag.description.toLowerCase().includes(filterValue));
  }

  fetchTags() {
    this.lookupsService.fetchTags().subscribe((data: Tag[]) => {this.allTags = data, this.initializeForm();});
  }

  updateProduct() {
    if (this.productForm.valid) {
      let _tags: number[] = [];
      this.tags.forEach(tag => _tags.push(tag.id as number));
      console.log(_tags);
      console.log(this.imageUrl);
      // const creationParameters: AddProduct = {
      //   name: this.productForm.controls['name'].value,
      //   description: this.productForm.controls['description'].value,
      //   price_per_unit: this.productForm.controls['price'].value,
      //   discount: this.productForm.controls['discount'].value,
      //   initial_quantity: this.productForm.controls['quantity'].value,
      //   image: this.imageUrl,
      //   categories: this.productForm.controls['categories'].value,
      //   tags: _tags,
      //   type: this.productForm.controls['type'].value,
      //   store: 2,
      // }

      const creationForm = new FormData();
      creationForm.append('id', JSON.stringify(this.product.id));
      creationForm.append('name', this.productForm.controls['name'].value);
      creationForm.append('description', this.productForm.controls['description'].value);
      creationForm.append('price_per_unit', this.productForm.controls['price'].value);
      creationForm.append('discount', this.productForm.controls['discount'].value);
      creationForm.append('initial_quantity', this.productForm.controls['quantity'].value);
      // creationForm.append('image', this.imageUrl);
      creationForm.append('categories', this.productForm.controls['categories'].value);
      creationForm.append('tags', _tags.join(','));
      creationForm.append('type', this.productForm.controls['type'].value);
      creationForm.append('store', JSON.stringify(2));


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
