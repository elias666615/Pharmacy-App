import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { SubCategory } from 'src/app/shared/models/productmodels';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { map, Observable, startWith } from 'rxjs';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  productForm = this.fb.group({
    name: [''],
    description: [''],
    price: [''],
    discount: [''],
    quantity: [''],
    image: [''],
    categories: [''],
  });

  Allcategories: SubCategory[] = [
    new SubCategory(1, "cat1"),
    new SubCategory(2, "cat2"),
    new SubCategory(3, "cat3"),
    new SubCategory(4, "cat4"),
  ];

  categories: SubCategory[] = [];

  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  filteredCategories!: Observable<SubCategory[]>;
  categoryCtrl = new FormControl();

  @ViewChild('categoryInput') categoryInput!: ElementRef<HTMLInputElement>;

  constructor(private fb: FormBuilder) {
    this.filteredCategories = this.categoryCtrl.valueChanges.pipe(
      startWith(null),
      map((category: SubCategory | null) => (category ? this._filter(category.description) : this.Allcategories.slice())),
    );
  }

  ngOnInit(): void {
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.categories.push({ id: 1, description: value });
    }
    event.chipInput!.clear();
  }

  remove(category: SubCategory): void {
    const index = this.categories.indexOf(category);
    if (index >= 0) {
      this.categories.splice(index, 1);
    }
  }
  selected(event: MatAutocompleteSelectedEvent): void {
    this.categories.push({ id: 1, description: event.option.viewValue });
    this.categoryInput.nativeElement.value = '';
    this.categoryCtrl.setValue(null);
  }

  private _filter(value: string): SubCategory[] {
    const filterValue = value.toLowerCase();

    return this.Allcategories.filter(category => category.description.toLowerCase().includes(filterValue));
  }
}

