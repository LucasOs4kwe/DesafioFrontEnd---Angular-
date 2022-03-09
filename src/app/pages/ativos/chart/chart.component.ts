import { AfterViewInit, Component, ElementRef, ViewChild, OnInit, Input } from '@angular/core';
import { Chart } from 'chart.js';
// import * as Chart2 from 'chart.js';
import { DadosService } from '../../../service/dados.service';
import { AtivosComponent, AtivosModel } from '..';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements AfterViewInit {
  @ViewChild('lineCanvas') lineCanvas: ElementRef;
  lineChart: any;
  @Input() idChart: number;

  constructor(private service: DadosService, private atv: AtivosComponent) {

  }

  ngAfterViewInit(): void {
    this.lineChartMethod();
  }

  lineChartMethod() {
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',],
        datasets: [
          {
            label: 'Price',
            fill: false,
            // lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: this.atv.stocks[this.idChart].chart,
            spanGaps: false,
          }
        ]
      }
    });
  }

}
