import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectGamesTotal } from 'src/app/state/cart/cart.selectors';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit{
  
  addedGamesTotal$ = this.store.select(selectGamesTotal)

  number = 0
  constructor(private store: Store) {}

  ngOnInit(): void {
    
  }
}
