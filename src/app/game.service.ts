import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private apiKey: string = 'ca22595e037b40b1b94eca1c7d151328';

  constructor() {}

  getGames() {
    const url = 'https://api.rawg.io/api/games';
    const params = {
      key: this.apiKey
      // Add any additional parameters as needed
    };

    return axios.get(url, { params });
  }
}
