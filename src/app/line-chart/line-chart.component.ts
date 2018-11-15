import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-line-chart',
    templateUrl: './line-chart.component.html',
    styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
    // options
    showXAxis = true;
    showYAxis = true;
    gradient = false;
    showLegend = true;
    showXAxisLabel = true;
    xAxisLabel = 'Number';
    showYAxisLabel = true;
    yAxisLabel = 'Color Value';
    timeline = true;

    colorScheme = {
        domain: [
            '#5AA454',
            '#A10A28',
            '#C7B42C',
            '#AAAAAA']
    };

    // line, area
    autoScale = true;

    // width and height of the chart
    view: number[] = [, 400];

    // chart data
    multi: any[] = [
        {
            name: 'Green',
            series: [
                {
                    name: 5,
                    value: 2650
                },
                {
                    name: 10,
                    value: 2800
                },
                {
                    name: 15,
                    value: 2000
                }
            ]
        },
        {
            name: 'Red',
            series: [
                {
                    name: 5,
                    value: 2500
                },
                {
                    name: 10,
                    value: 3100
                },
                {
                    name: 15,
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
