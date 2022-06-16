import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { MatBadgeModule } from '@angular/material/badge';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    LayoutComponent,
    NavbarComponent
  ], 
  exports: [
    NavbarComponent
  ], 
  imports: [
    RouterModule,
    MatBadgeModule,
    CommonModule
  ]
})
export class CommonsModule {

}