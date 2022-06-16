import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { CartState } from './cart.reducer';


export const selectCart = createFeatureSelector<any>('cart');

export const selectAllGames = createSelector(
  selectCart,
  (state: CartState) => state.games
);

export const selectGamesTotal = createSelector(
  selectCart,
  (state: CartState) => state.total
);