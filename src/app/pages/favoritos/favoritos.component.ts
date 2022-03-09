import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output } from '@angular/core';
import { DadosService } from 'src/app/service/dados.service';
import { AtivosModel } from '../ativos';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {
  @Output() idChart_fav: number;

  stocks: AtivosModel[] = [];

  constructor(private dataService: DadosService, private http: HttpClient) { }

  ngOnInit(): void {
    this.dataService.getData()
      .subscribe((data: any[]) => {
        this.stocks = data;
      })
  }

  FavButton(i) {

    var btn = document.getElementById(`btn_${i}`);

    if (this.stocks[i].Favlike == false) {
      this.http.patch('http://localhost:3000/ativos' + '/' + i, { Favlike: true })
        .subscribe(res => console.log(res));
    } else {
      this.http.patch('http://localhost:3000/ativos' + '/' + i, { Favlike: false })
        .subscribe(res => console.log(res));
    }

    this.ngOnInit();
  }

  modalBox(i) {
    var modal = document.getElementById(`myModal_${i}`);
    modal.style.display = 'block';
    var span = document.getElementById(`close_${i}`);

    span.onclick = () => {
      modal.style.display = 'none';
    };

    window.onclick = event => {
      if (event.target == modal) {
        modal.style.display = 'none';
        // modal.style.animation = 'modal_out 500ms backwards';
        // setInterval(() => {

        // }, 500);
      };
    };
  }


}
