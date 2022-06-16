import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonsModule } from '../commons/commons.module';
import { HomeComponent } from './home/home.component';
import { StoreRoutingModule } from './store-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { StoreComponent } from './store.component';
import { MatCardModule } from '@angular/material/card'
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon'
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    StoreComponent, 
    HomeComponent,
    CartComponent
  ], 
  imports: [
    RouterModule,
    CommonModule,
    StoreRoutingModule,
    CommonsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
  ]
})
export class GameStoreModule {
}