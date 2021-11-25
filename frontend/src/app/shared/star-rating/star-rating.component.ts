import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit {

  @Input() rating!: number;
  number_filled!: number[];
  number_empty!: number[];

  constructor() {}

  ngOnInit(): void {
    var number: number = Math.round(this.rating);
    this.number_filled = Array(number).fill(1).map((x,i)=>i);
    this.number_empty = Array(5 - number).fill(1).map((x,i)=>i);
  }

}
