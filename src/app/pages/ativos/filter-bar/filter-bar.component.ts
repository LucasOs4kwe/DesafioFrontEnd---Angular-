import { Component, Input, OnInit } from '@angular/core';
import { DadosService } from 'src/app/service/dados.service';
import { AtivosModel } from '..';
import { AtivosComponent } from '..';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.css']
})
export class FilterBarComponent implements OnInit {


  // stocks: AtivosModel[];

  constructor(private dados: DadosService, private Atv: AtivosComponent) { }

  ngOnInit(): void {
    // this.dados.getData()
    //   .subscribe((data: any[]) => {
    //     this.stocks = data;
    //   });
  }

  clearFilter() {
    (<HTMLSelectElement>document.getElementById('filter_slct')).value = '0';
    (document.querySelector<HTMLInputElement>('input[name="pv"]:checked')).checked = false;
  };

  order() {
    var slct = (<HTMLSelectElement>document.getElementById('filter_slct')).value;
    var check = (document.querySelector<HTMLInputElement>('input[name="pv"]:checked')).value;

    if (slct == '1') {
      if (check == 'op1') {
        this.Atv.stocks.sort((x, y) => {
          return y.price - x.price
        });
      } else {
        this.Atv.stocks.sort((x, y) => {
          return x.price - y.price
        });
      }
    }

    else {
      if (check == 'op1') {
        this.Atv.stocks.sort((x, y) => {
          return y.variation - x.variation
        });
      } else {
        this.Atv.stocks.sort((x, y) => {
          return x.variation - y.variation
        });
      }
    }
  };

}
