import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit {

  @Input() enabled: boolean = false;
  @Input() rating: number = 0;
  stars: string[] = [];
  @Output() rated = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {
    this.rating = Math.round(this.rating);
    for(let i = 0; i < 5; i++) {
      if(i < this.rating) this.stars.push('../../../assets/star-filled.png');
      else this.stars.push('../../../assets/star-empty.png');
    }
  }

  onHover(index: number) {
    if(this.enabled == true) {
      for(let i = 0; i < 5; i++) {
        if(i <= index) this.stars[i] = '../../../assets/star-filled.png';
        else this.stars[i] = '../../../assets/star-empty.png';
      }
    }
  }

  onMouseLeave() {
    if(this.enabled == true) {
      for(let i = 0; i < 5; i++) {
        if(i < this.rating) this.stars[i] = '../../../assets/star-filled.png';
        else this.stars[i] = '../../../assets/star-empty.png';
      }
    }
  }

  onClick(index: number) {
    if(this.enabled == true) {
      for(let i = 0; i < 5; i++) {
        if(i <= index) this.stars[i] = '../../../assets/star-filled.png';
        else this.stars[i] = '../../../assets/star-empty.png';
      }
      this.rating = index + 1;
      this.rated.emit(this.rating);
    }
  }
}
