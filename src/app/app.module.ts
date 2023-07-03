import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TopGamesComponent } from './top-games/top-games.component';
import { MostBeatenGamesComponent } from './most-beaten-games/most-beaten-games.component';
import { ImgCardComponent } from './reusable/img-card/img-card.component';
import { ImgCarousalComponent } from './reusable/img-carousal/img-carousal.component';

@NgModule({
  declarations: [
    AppComponent,
    TopGamesComponent,
    MostBeatenGamesComponent,
    ImgCardComponent,
    ImgCarousalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
