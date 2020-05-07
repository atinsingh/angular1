import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  imagePath: string;
  @Input()
  data: { imageSrc, title ,btnText, star };

  @Output()
  clickText  = new EventEmitter<string> ();

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
     this.clickText.emit(text);
  }


}
