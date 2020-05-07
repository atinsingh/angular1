import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  enableCheckMe = false;

  @Output()
  stars  = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  applyFilter(star): void{
    console.log(star);
    this.stars.emit(star);
  }

}
