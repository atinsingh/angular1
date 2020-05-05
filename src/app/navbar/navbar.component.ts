import { Component , OnInit } from '@angular/core'
@Component( {
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavBarComponent implements OnInit {
    navHeading: string = 'APP NAVBAR';
    isEnabled = false;
    ngOnInit(){
        //
    }
}