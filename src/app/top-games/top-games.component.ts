import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-top-games',
  templateUrl: './top-games.component.html',
  styleUrls: ['./top-games.component.css']
})
export class TopGamesComponent implements OnInit {
  games: any;
  topGamesTitle: any;
  topGamesPicture: any;
  constructor(private gameService: GameService) {}

  ngOnInit() {
    this.gameService.getGames()
      .then(response => {
        const games = response.data.results;
        this.games = games.slice(0, 20);
      })
      .catch(error => {
        console.error(error);
      });
  }

}
