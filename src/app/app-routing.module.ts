import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtivosComponent } from './pages/ativos';
import { FavoritosComponent } from './pages/favoritos';
import { ChartComponent } from './pages/ativos/chart';

const routes: Routes = [
  //Setar a rota index como default
  {path: '', redirectTo: 'ativos', pathMatch: 'full'},
  {path: 'ativos', component: AtivosComponent},
  {path: 'favoritos', component: FavoritosComponent},
  {path: 'chart', component: ChartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
