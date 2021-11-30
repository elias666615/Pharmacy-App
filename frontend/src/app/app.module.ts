import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { LoginComponent } from './authentication/login/login.component';
import { SalesComponent } from './seller/sales/sales.component';
import { HomeComponent } from './seller/home/home.component';
import { NavigationComponent } from './seller/navigation/navigation.component';
import { ProfileComponent } from './seller/profile/profile.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { ProductComponent } from './shared/product/product.component';
import { MatCardModule } from '@angular/material/card';
import { StarRatingComponent } from './shared/star-rating/star-rating.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ReactiveFormsModule } from '@angular/forms';
import { AddProductComponent } from './seller/add-product/add-product.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { UpdateProductComponent } from './seller/update-product/update-product.component';
import { SignupBuyerComponent } from './authentication/signup-buyer/signup-buyer.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MultipurposePopupComponent } from './shared/multipurpose-popup/multipurpose-popup.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SalesComponent,
    HomeComponent,
    PageNotFoundComponent,
    ProfileComponent,
    NavigationComponent,
    ProductComponent,
    StarRatingComponent,
    AddProductComponent,
    UpdateProductComponent,
    SignupBuyerComponent,
    MultipurposePopupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    CommonModule,
    MatSelectModule,
    MatButtonModule,
    MatSidenavModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatSnackBarModule,
    MatMenuModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
