import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-normalized-vartical-bar-chart',
    templateUrl: './normalized-vartical-bar-chart.component.html',
    styleUrls: ['./normalized-vartical-bar-chart.component.css']
})
export class NormalizedVarticalBarChartComponent implements OnInit {
// options
    showXAxis = true;
    showYAxis = true;
    gradient = false;
    showLegend = true;
    showXAxisLabel = true;
    xAxisLabel = 'Group Name';
    showYAxisLabel = true;
    yAxisLabel = 'Color Value';

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
