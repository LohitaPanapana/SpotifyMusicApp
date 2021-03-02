import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { CardsComponent } from './cards/cards.component';
import { ListComponent } from './list/list.component';
import { PopularComponent } from './popular/popular.component';



@NgModule({
  declarations: [CardComponent, CardsComponent, ListComponent, PopularComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    CardsComponent,
    ListComponent,
    PopularComponent
  ]
})
export class SharedModule { }
