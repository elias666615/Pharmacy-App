import { Component, OnInit } from '@angular/core';
import { UserInfo, CardInfo } from '../../authentication/models/userModels';
import { AuthenticationService } from 'src/app/authentication/services/authentication.service';

@Component({
  selector: 'app-buyer-profile',
  templateUrl: './buyer-profile.component.html',
  styleUrls: ['./buyer-profile.component.css']
})
export class BuyerProfileComponent implements OnInit {

  user!: UserInfo;
  cardInfo!: CardInfo;
  loading1: boolean = true;
  loading2: boolean = true;

  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.fetchUser();
    this.fetchBankInfo();
  }

  fetchUser() {
    this.authService.fetchUser(localStorage.getItem('email')!).subscribe((data: UserInfo) => {this.user = data; this.loading1 = false;});
  }

  fetchBankInfo() {
    this.authService.fetchCardInfo(localStorage.getItem('email')!).subscribe((data: CardInfo) => {this.cardInfo = data; this.loading2 = false;console.log(this.cardInfo)});
  }

  get cardNumber() {
    return this.cardInfo.card_number.slice(-4);
  }

}
