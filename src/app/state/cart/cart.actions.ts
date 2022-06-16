import { createAction, props } from "@ngrx/store";

export const addGameToCart = createAction(
  '[Home Page] Add Game',
  props<{ game: any }>()
)

export const removeGameFromCart = createAction(
  '[Home Page] Remove Game',
  props<{ gameId: number }>()
)

export const incrementTotal = createAction(
  '[Home Page] Increment Total'
)

export const decrementTotal = createAction(
  '[Home Page] Decrement Total'
)
