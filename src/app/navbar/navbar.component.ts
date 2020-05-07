import { Component , OnInit, Input } from '@angular/core'
@Component( {
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavBarComponent implements OnInit {
    navHeading = 'APP NAVBAR';

    @Input('btnText') selectedButton: string;

    isEnabled = false;
    ngOnInit(){
        //
    }
}