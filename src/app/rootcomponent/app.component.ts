import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  picData = [
    {
          title: 'Vue JS',
          imageSrc: '../../assets/vue.jpeg'
    },
    {
      title: 'React JS',
      imageSrc: '../../assets/react.jpg'
    },
    {
      title: 'Angular',
      imageSrc: '../../assets/angular.jpg'
  }
  ];
  title = 'contact-card';
}
