import { Component, Input, OnInit, Output, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AtivosModel } from '.';
import { DadosService } from '../../service/dados.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ativos',
  templateUrl: './ativos.component.html',
  styleUrls: ['./ativos.component.css']
})
export class AtivosComponent implements OnInit {
  @Output() idChart: number;

  stocks: AtivosModel[] = [];


  constructor(private router: Router, private activatedRoute: ActivatedRoute, private dataService: DadosService, private http: HttpClient) {

  }

  ngOnInit(): void {
    this.dataService.getData()
      .subscribe((dados: any[]) => {
        this.stocks = dados;
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
    }

    window.onclick = event => {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    }
  }

}