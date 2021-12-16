import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { SalesComponent } from './seller/sales/sales.component';
import { NavigationComponent } from './seller/navigation/navigation.component';
import { ProfileComponent } from './seller/profile/profile.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { HomeComponent } from './seller/home/home.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { BuyerNavigationComponent } from './buyer/buyer-navigation/buyer-navigation.component';
import { BuyerHomeComponent } from './buyer/buyer-home/buyer-home.component';
import { BuyerOrdersComponent } from './buyer/buyer-orders/buyer-orders.component';
import { ProductDetailsComponent } from './shared/product-details/product-details.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'buyer', component: BuyerNavigationComponent,
    children: [
      { path: 'home', component: BuyerHomeComponent },
      { path: 'orders', component: BuyerOrdersComponent },
      { path: 'product/:id', component: ProductDetailsComponent },
    ] 
  },
  {
    path: 'seller', component: NavigationComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'sales', component: SalesComponent },
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
