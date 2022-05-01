import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { SkilesComponent } from './skiles/skiles.component';
import { PortfolioComponent } from './portfolio.component';


@NgModule({
  declarations: [
    PortfolioComponent,
    SkilesComponent,
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
  ]
})
export class PortfolioModule { }
