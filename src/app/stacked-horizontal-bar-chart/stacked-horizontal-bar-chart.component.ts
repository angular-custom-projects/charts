import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stacked-horizontal-bar-chart',
  templateUrl: './stacked-horizontal-bar-chart.component.html',
  styleUrls: ['./stacked-horizontal-bar-chart.component.css']
})
export class StackedHorizontalBarChartComponent implements OnInit {
// options
    showXAxis = true;
    showYAxis = true;
    gradient = false;
    showLegend = true;
    showXAxisLabel = true;
    xAxisLabel = 'Color Value';
    showYAxisLabel = true;
    yAxisLabel = 'Group Name';

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
            name: 'First Group',
            series: [
                {
                    name: 'Green',
                    value: 2650
                },
                {
                    name: 'Red',
                    value: 2800
                },
                {
                    name: 'Yellow',
                    value: 2000
                }
            ]
        },
        {
            name: 'Second Group',
            series: [
                {
                    name: 'Green',
                    value: 2500
                },
                {
                    name: 'Red',
                    value: 3100
                },
                {
                    name: 'Yellow',
                    value: 2350
                }
            ]
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
