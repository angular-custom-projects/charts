import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-horizontal-bar-chart',
  templateUrl: './horizontal-bar-chart.component.html',
  styleUrls: ['./horizontal-bar-chart.component.css']
})
export class HorizontalBarChartComponent implements OnInit {
    // options
    showXAxis = true;
    showYAxis = true;
    gradient = false;
    showLegend = true;
    showXAxisLabel = true;
    xAxisLabel = 'Color Value';
    showYAxisLabel = true;
    yAxisLabel = 'Color Name';

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
