import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgChartsModule } from 'ng2-charts';
import { AtivosModule } from './pages/ativos';
import { DadosService } from './service/dados.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AtivosModule,
    NgChartsModule
  ],
  providers: [DadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
