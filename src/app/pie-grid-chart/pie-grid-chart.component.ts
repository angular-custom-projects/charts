import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-grid-chart',
  templateUrl: './pie-grid-chart.component.html',
  styleUrls: ['./pie-grid-chart.component.css']
})
export class PieGridChartComponent implements OnInit {
    // options
    gradient = false;
    showLegend = true;

    colorScheme = {
        domain: [
            '#5AA454',
            '#A10A28',
            '#C7B42C',
            '#AAAAAA']
    };

    // chart data
    multi: any[] = [
        {
            name: 'Green',
            value: 2650
        },
        {
            name: 'Red',
            value: 2500
        },
        {
            name: 'Yellow',
            value: 2200
        }
    ];

    constructor() {
    }

    ngOnInit() {
    }

    onSelect(event) {
        console.log(event);
    }
}
