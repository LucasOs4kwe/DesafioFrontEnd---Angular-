import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtivosComponent } from './ativos.component';
import { HttpClientModule } from '@angular/common/http';
// import { DadosService } from '.';
import { NgChartsModule } from 'ng2-charts';
import { FilterBarComponent } from './filter-bar/filter-bar.component';
import { ModalComponent } from './modal';
import { ChartComponent } from './chart';

@NgModule({
  declarations: [
    AtivosComponent,
    FilterBarComponent,
    ModalComponent,
    ChartComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgChartsModule
  ],
  exports: [
    AtivosComponent
  ]
})
export class AtivosModule { }
