import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AgmCoreModule } from '@agm/core';

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
import { MatRippleModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SignupComponent } from './authentication/signup/signup.component';
import { SignupUserComponent } from './authentication/signup-user/signup-user.component';
import { SignupSellerComponent } from './authentication/signup-seller/signup-seller.component';
import { MatTabsModule } from '@angular/material/tabs';
import { BuyerNavigationComponent } from './buyer/buyer-navigation/buyer-navigation.component';
import { BuyerHomeComponent } from './buyer/buyer-home/buyer-home.component';
import { BuyerOrdersComponent } from './buyer/buyer-orders/buyer-orders.component';
import { OrderItemComponent } from './shared/order-item/order-item.component';
import { ProductDetailsComponent } from './shared/product-details/product-details.component';


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
    SignupComponent,
    SignupUserComponent,
    SignupSellerComponent,
    BuyerNavigationComponent,
    BuyerHomeComponent,
    BuyerOrdersComponent,
    OrderItemComponent,
    ProductDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyBEuiq9gVfTLFsrrSAr6TcqB1FNzTHjDpE'}),
    // AgmCoreModule.forRoot({apiKey: ''}),

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
    MatRippleModule,
    MatCheckboxModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
