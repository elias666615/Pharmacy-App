import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit {

  @Input() enabled: boolean = false;
  @Input() rating: number = 1;
  stars: boolean[] = [];

  constructor() {}

  ngOnInit(): void {
    this.rating = Math.round(this.rating);
    for(let i = 0; i < 5; i++) {
      if(i < this.rating) this.stars.push(true);
      else this.stars.push(false);
    }
  }

  onHover(index: number) {
    if(this.enabled == true) {
      for(let i = 0; i < 5; i++) {
        if(i <= index) this.stars[i] = true;
        else this.stars[i] = false;
      }
    }
  }

  onMouseLeave() {
    if(this.enabled == true) {
      for(let i = 0; i < 5; i++) {
        if(i < this.rating) this.stars[i] = true;
        else this.stars[i] = false;
      }
    }
  }

  onClick(index: number) {
    if(this.enabled == true) {
      this.rating = index + 1;
    }
  }
}
