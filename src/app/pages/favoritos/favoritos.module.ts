import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritosComponent } from './favoritos.component';
import { DadosService } from 'src/app/service/dados.service';
import { HttpClientModule } from '@angular/common/http';
import { FilterBarFavComponent } from './filter-bar/filter-bar-fav.component';
import { ChartFavComponent } from './chart';

@NgModule({
  declarations: [
    FavoritosComponent,
    FilterBarFavComponent,
    ChartFavComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    DadosService
  ],
  exports: [
    FavoritosComponent
  ]
})
export class FavoritosModule { }
