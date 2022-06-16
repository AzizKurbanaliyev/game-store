import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/services/games.service';
import { Store } from '@ngrx/store';
import { selectAllGames } from 'src/app/state/cart/cart.selectors';
import { addGameToCart, incrementTotal } from 'src/app/state/cart/cart.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  games: any[] = []; 
  gameDeals: any[] = [];

  constructor(
    private gamesService: GamesService,
    private store: Store
    ) {
  }

  ngOnInit(): void {
    this.gamesService.getDeals().subscribe(res => {
      this.gameDeals = res;
    })
    this.gamesService.getFeaturedGames().subscribe(res => {
      this.games = res.featured_win;
    })
  }

  
  addGameToCart(game: any): void {
    this.store.dispatch(addGameToCart({game})); 
    this.store.dispatch(incrementTotal());
  }
}
