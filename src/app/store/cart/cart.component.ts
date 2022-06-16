import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/services/games.service';
import { Store } from '@ngrx/store';
import { selectAllGames } from 'src/app/state/cart/cart.selectors';
import { decrementTotal, removeGameFromCart } from 'src/app/state/cart/cart.actions';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit {

  gamesAddedToCart$ = this.store.select(selectAllGames)
  games: any[] = [];
  gamesSum: number = 0; 
  constructor(
    private gamesService: GamesService,
    private store: Store
    ) {
  }

  ngOnInit(): void {
    this.gamesAddedToCart$.subscribe(res => {
      this.games = res;
      this.gamesSum = res.reduce((acc, val) => {
        return acc + Number(val.salePrice);
      }, 0)
    })
  }

  removeGameFromCart(id: any): void {
    this.store.dispatch(removeGameFromCart({ gameId: id })); 
    this.store.dispatch(decrementTotal());
  }
}
