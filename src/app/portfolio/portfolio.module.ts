import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { PortfolioRoutingModule } from './portfolio-routing.module';
import { SkilesComponent } from './skiles/skiles.component';
import { PortfolioComponent } from './portfolio.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    PortfolioComponent,
    SkilesComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    LayoutModule
  ]
})
export class PortfolioModule { }
