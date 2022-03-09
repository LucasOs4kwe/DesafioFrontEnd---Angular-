import { Component, OnInit } from '@angular/core';
import { FavoritosComponent } from '..';

@Component({
  selector: 'app-filter-bar-fav',
  templateUrl: './filter-bar-fav.component.html',
  styleUrls: ['./filter-bar-fav.component.css']
})
export class FilterBarFavComponent implements OnInit {

  constructor(private fav: FavoritosComponent) { }

  ngOnInit(): void {
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
        this.fav.stocks.sort((x, y) => {
          return y.price - x.price
        });
      } else {
        this.fav.stocks.sort((x, y) => {
          return x.price - y.price
        });
      }
    } 
    
    else {
      if (check == 'op1') {
        this.fav.stocks.sort((x, y) => {
          return y.variation - x.variation
        });
      } else {
        this.fav.stocks.sort((x, y) => {
          return x.variation - y.variation
        });
      }
    }
    
  }


}
