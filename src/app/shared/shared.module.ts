import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { CardsComponent } from './cards/cards.component';



@NgModule({
  declarations: [CardComponent, CardsComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CardsComponent
  ]
})
export class SharedModule { }
