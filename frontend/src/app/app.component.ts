import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, UserInfo } from './authentication/models/userModels';
import { AuthenticationService } from './authentication/services/authentication.service';
import { UserDataManager } from './authentication/services/userDataManager';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'frontend';

  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {}

  ngOnInit(): void {
    console.log('testing');
    this.checkLocalStorage();
  }

  checkLocalStorage() {
    // const email = localStorage.getItem('email');
    // const access = localStorage.getItem('access');
    // const refresh = localStorage.getItem('refresh');
    // if (email === null || access === null || refresh === null) {
    //   this.router.navigate(['/login']);
    // } else {
    //   UserDataManager.setEmail(email);
    //   UserDataManager.setAccess(access);
    //   UserDataManager.setRefresh(refresh);

    //   this.authService
    //     .fetchUser(UserDataManager.getEmail())
    //     .subscribe((data: UserInfo) => {
    //       UserDataManager.setUserInfo(data);
    //       if (UserDataManager.getRole().code === 'SLR') {
    //         this.authService
    //           .fetchStore(UserDataManager.getEmail())
    //           .subscribe((data: Store) => {
    //             UserDataManager.setStore(data);
    //             this.router.navigate(['/seller/home']);
    //           });
    //       } else if (UserDataManager.getRole().code === 'BYR') {
    //         this.router.navigate(['/buyer/home']);
    //       }
    //     });
    // }
  }
}
