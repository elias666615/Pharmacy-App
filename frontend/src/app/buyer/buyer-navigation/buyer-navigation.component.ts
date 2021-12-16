import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buyer-navigation',
  templateUrl: './buyer-navigation.component.html',
  styleUrls: ['./buyer-navigation.component.css'],
  animations: [
    trigger('selectUnselect', [
      state('selected', style({
        backgroundColor: '#3FEEE6',
        color: 'white',
      })),
      state('unselected', style({
        backgroundColor: '#2ba6b6',
        color: '#CAFAFE',
      })),
      transition('selected => unselected', [animate('0.1s')]),
      transition('unselected => selected', animate('0.1s')),
    ])
  ]
})
export class BuyerNavigationComponent implements OnInit {
  urlPath: string = '';

  constructor(
    private route: Router,
  ) { }
  ngOnInit(): void {
    this.urlPath = this.route.url.split('/')[2];
  }

  switchRoute(path: string) {
    this.urlPath = path;
  }
}
