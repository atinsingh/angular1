import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  buttonText = 'Learning Something';
  picData = [
    {
          title: 'Vue JS',
          imageSrc: '../../assets/vue.jpeg',
          btnText: 'Enjoy Vue'
    },
    {
      title: 'React JS',
      imageSrc: '../../assets/react.jpg',
      btnText: 'Learn React'
    },
    {
      title: 'Angular',
      imageSrc: '../../assets/angular.jpg',
      btnText: 'Learning Angular'
  }
  ];
  title = 'contact-card';
}
