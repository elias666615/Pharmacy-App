import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { SalesComponent } from './seller/sales/sales.component';
import { NavigationComponent } from './seller/navigation/navigation.component';
import { ProfileComponent } from './seller/profile/profile.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { HomeComponent } from './seller/home/home.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'seller', component: NavigationComponent, 
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'sales', component: SalesComponent },
    ]},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
