import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../rootcomponent/app.component';
import { NavBarComponent } from '../navbar/navbar.component';
import { CardComponent } from '../card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
