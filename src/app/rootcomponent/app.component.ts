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
          btnText: 'Enjoy Vue',
          star: 5
    },
    {
      title: 'React JS',
      imageSrc: '../../assets/react.jpg',
      btnText: 'Learn React',
      star: 5
    },
    {
      title: 'Angular',
      imageSrc: '../../assets/angular.jpg',
      btnText: 'Learning Angular',
      star : 4
  },{
    title: 'NestJs',
    imageSrc: '../../assets/nest-og.png',
    btnText: 'Learn NestJs',
    star: 3
}];
  dataArray = this.picData;
  title = 'contact-card';

  updateNavBar(event): void {
      this.buttonText = event;
  }
  addFilter(event):void {
    this.dataArray = this.picData.filter(item => item.star === event);
    console.log(`Logging from App Component: ${event}`);
    console.log(this.picData);
  }
}
