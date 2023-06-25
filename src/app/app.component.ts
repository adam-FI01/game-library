import { Component, OnInit } from '@angular/core';
import { GameService } from './game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  topGamesTitle: any;
  topGamesPicture: any;
  constructor(private gameService: GameService) {}

  ngOnInit() {
    this.gameService.getGames()
      .then(response => {
        // Extract the game titles from the response
        const games = response.data.results;
        console.log(games)
        this.topGamesTitle = games.slice(0, 20).map((game: { name: any; }) => game.name);
        this.topGamesPicture = games.slice(0, 20).map((game: { background_image: any; }) => game.background_image);
      })
      .catch(error => {
        // Handle errors
        console.error(error);
      });
  }
}
