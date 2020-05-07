import { Component, OnInit, Input, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  imagePath: string;
  @Input()
  data: { imageSrc, title ,btnText };

  @Output()
  clickText  = new EventEmitter();

  constructor(private httpClient: HttpClient) {
    //
   }

  ngOnInit(): void {
    this.httpClient.get<{data}>('http://localhost:8081/api/course-info/abc/img').subscribe(
      data => {
        this.imagePath = data.data;
      }
    );
  }



  updateText(text): void{
      console.log(text);
  }


}
