import { createReducer, on } from '@ngrx/store';
import { addGameToCart, decrementTotal, incrementTotal, removeGameFromCart } from './cart.actions';

export interface CartState {
  games: any[];
  total: number; 
}

export const initialState: CartState = {
  games: [],
  total: 0
};

export const cartReducer = createReducer(
  initialState, 
  on(addGameToCart, (state, { game }) => ({
    ...state,
    games: [...state.games, game],
  })),
  on(removeGameFromCart, (state, { gameId }) => ({
    ...state, 
    games: state.games.filter(game => game.gameID !== gameId)
  })),
  on(incrementTotal, (state) => ({
    ...state, 
    total: state.total + 1
  })),
  on(decrementTotal, (state) => ({
    ...state, 
    total: state.total - 1
  }))
)