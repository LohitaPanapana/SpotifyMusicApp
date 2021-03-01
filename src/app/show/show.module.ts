import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowRoutingModule } from './show-routing.module';
import { ShowAllComponent } from './show-all/show-all.component';


@NgModule({
  declarations: [ShowAllComponent],
  imports: [
    CommonModule,
    ShowRoutingModule,
    SharedModule
  ], exports: [
    ShowAllComponent
  ]
})
export class ShowModule { }
