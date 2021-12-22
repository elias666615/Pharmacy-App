import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Router } from '@angular/router';
import { Category } from 'src/app/shared/models/productmodels';
import { LookupsService } from 'src/app/shared/services/lookups.service';

@Component({
  selector: 'app-buyer-navigation',
  templateUrl: './buyer-navigation.component.html',
  styleUrls: ['./buyer-navigation.component.css'],
  animations: [
    trigger('selectUnselect', [
      state('selected', style({
        backgroundColor: '#5CDB95',
        color: 'white',
      })),
      state('unselected', style({
        backgroundColor: '#05386B',
        color: '#EDF5E1',
      })),
      transition('selected => unselected', [animate('0.1s')]),
      transition('unselected => selected', animate('0.1s')),
    ])
  ]
})
export class BuyerNavigationComponent implements OnInit {
  urlPath: string = '';

  @ViewChild('navbar') navbar!: ElementRef<HTMLDivElement>;
  navbarHeight: number = 0;

  contentHeight = {height: `calc(100vh - ${this.navbarHeight}px)`};

  constructor(
    private route: Router,
    private lookupsService: LookupsService,
  ) { }
  ngOnInit(): void {
    this.urlPath = this.route.url.split('/')[2];
  }
  ngAfterViewInit() {
    this.navbarHeight = this.navbar.nativeElement.offsetHeight;
    this.contentHeight = {height: `calc(100vh - ${this.navbarHeight}px)`};
    window.addEventListener('resize', () => {
      this.navbarHeight = this.navbar.nativeElement.offsetHeight;
      this.contentHeight = {height: `calc(100vh - ${this.navbarHeight}px)`};
    })
  }

  switchRoute(path: string) {
    this.urlPath = path;
  }

  logout() {
    localStorage.clear();
    this.route.navigate(['/login']);
  }
}
