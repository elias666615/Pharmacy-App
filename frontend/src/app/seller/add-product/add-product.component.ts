import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { SubCategory, Tag, Type } from 'src/app/shared/models/productmodels';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { LookupsService } from 'src/app/shared/services/lookups.service';
import { ProductService } from 'src/app/shared/services/product.service';
import { AddProduct } from 'src/app/shared/models/productmodels';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  @Input() types!: Type[];
  @Input() allCategories!: SubCategory[];
  allTags: Tag[] = [];

  productForm = this.fb.group({
    name: [''],
    description: [''],
    price: [''],
    discount: ['0'],
    quantity: [''],
    image: [''],
    categories: [''],
    type: [''],
  });

  selectable = true;
  removable = true;

  separatorKeysCodes: number[] = [ENTER, COMMA];
  tagCtrl = new FormControl();
  tags: Tag[] = [];
  filteredTags: Tag[] = this.allTags;
  @ViewChild('tagInput') tagInput!: ElementRef<HTMLInputElement>;

  constructor(
    private fb: FormBuilder,
    private lookupsService: LookupsService,
    private productService: ProductService,) {
  }

  ngOnInit(): void {
    this.fetchTags();
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
    this.lookupsService.fetchTags().subscribe((data: Tag[]) => this.allTags = data);
  }

  addProduct() {
    if (this.productForm.valid) {
      let _tags: number[] = [];
      this.tags.forEach(tag => _tags.push(tag.id as number));
      console.log(_tags);
      const creationParameters: AddProduct = {
        name: this.productForm.controls['name'].value,
        description: this.productForm.controls['description'].value,
        price_per_unit: this.productForm.controls['price'].value,
        discount: this.productForm.controls['discount'].value,
        initial_quantity: this.productForm.controls['quantity'].value,
        image: this.productForm.controls['image'].value,
        categories: this.productForm.controls['categories'].value,
        tags: _tags,
        type: this.productForm.controls['type'].value,
        store: 2,
      }

      this.productService.addProduct(creationParameters).subscribe();
    }
  }
}

