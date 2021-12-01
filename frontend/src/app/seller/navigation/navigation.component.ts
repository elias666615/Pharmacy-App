import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  animations: [
    trigger('selectUnselect', [
      state('selected', style({
        backgroundColor: '#3FEEE6',
        padding: '25px 0 25px 12%',
        fontSize: '23px',
        color: 'white',
      })),
      state('unselected', style({
        backgroundColor: '#2ba6b6',
        padding: '20px 0 20px 10%',
        fontSize: '20px',
        color: '#CAFAFE',
      })),
      transition('selected => unselected', [animate('0.1s')]),
      transition('unselected => selected', animate('0.1s')),
    ])
  ]
})
export class NavigationComponent implements OnInit {
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
