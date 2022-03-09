import { Component, AfterViewInit, ElementRef, ViewChild, Input } from '@angular/core';
import { Chart } from 'chart.js';
import { FavoritosComponent } from '..';


@Component({
  selector: 'app-chart-fav',
  templateUrl: './chart-fav.component.html',
  styleUrls: ['./chart-fav.component.css']
})
export class ChartFavComponent implements AfterViewInit {
  @ViewChild('lineCanvas') lineCanvas: ElementRef;
  lineChart: any;
  @Input() idChart_fav: number;


  constructor(private fav: FavoritosComponent) { }

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
            data: this.fav.stocks[this.idChart_fav].chart,
            spanGaps: false,
          }
        ]
      }
    });
  }

}
