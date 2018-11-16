import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {NavItem} from './nav-item';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
    opened = true;

    navItems: NavItem[] = [
        {
            displayName: 'Line / Area Charts',
            iconName: 'show_chart',
            children: [
                {
                    displayName: 'Line Chart',
                    iconName: '',
                    route: 'line-chart'
                },
                {
                    displayName: 'Area Chart',
                    iconName: '',
                    route: 'area-chart'
                },
                {
                    displayName: 'Stacked Area Chart',
                    iconName: '',
                    route: 'stacked-area-chart'
                },
                {
                    displayName: 'Normalized Area Chart',
                    iconName: '',
                    route: 'normalized-area-chart'
                }
            ]
        },
        {
            displayName: 'Pie Charts',
            iconName: 'pie_chart',
            children: [
                {
                    displayName: 'Pie Chart',
                    iconName: '',
                    route: 'pie-chart'
                },
                {
                    displayName: 'Advanced Pie Chart',
                    iconName: '',
                    route: 'advanced-pie-chart'
                },
                {
                    displayName: 'Pie Grid Chart',
                    iconName: '',
                    route: 'pie-grid-chart'
                }
            ]
        },
        {
            displayName: 'Bar Charts',
            iconName: 'bar_chart',
            children: [
                {
                    displayName: 'Vertical Bar Chart',
                    iconName: '',
                    route: 'vertical-bar-chart'
                },
                {
                    displayName: 'Horizontal Bar Chart',
                    iconName: '',
                    route: 'horizontal-bar-chart'
                },
                {
                    displayName: 'Grouped Vertical Bar Chart',
                    iconName: '',
                    route: 'grouped-vertical-bar-chart'
                },
                {
                    displayName: 'Grouped Horizontal Bar Chart',
                    iconName: '',
                    route: 'grouped-horizontal-bar-chart'
                },
                {
                    displayName: 'Stacked Vertical Bar Chart',
                    iconName: '',
                    route: 'stacked-vertical-bar-chart'
                },
                {
                    displayName: 'Stacked Horizontal Bar Chart',
                    iconName: '',
                    route: 'stacked-horizontal-bar-chart'
                },
                {
                    displayName: 'Normalized Vertical Bar Chart',
                    iconName: '',
                    route: 'normalized-vertical-bar-chart'
                },
                {
                    displayName: 'Normalized horizontal Bar Chart',
                    iconName: '',
                    route: 'normalized-horizontal-bar-chart'
                }
            ]
        }
    ];

    mobileQuery: MediaQueryList;

    private _mobileQueryListener: () => void;

    constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }

    ngOnDestroy(): void {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }
}
