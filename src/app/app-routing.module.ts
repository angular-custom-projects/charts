import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {LineChartComponent} from './line-chart/line-chart.component';
import {HomeComponent} from './home/home.component';
import {AreaChartComponent} from './area-chart/area-chart.component';
import {StackedAreaChartComponent} from './stacked-area-chart/stacked-area-chart.component';
import {NormalizedAreaChartComponent} from './normalized-area-chart/normalized-area-chart.component';
import {PieChartComponent} from './pie-chart/pie-chart.component';
import {AdvancedPieChartComponent} from './advanced-pie-chart/advanced-pie-chart.component';
import {PieGridChartComponent} from './pie-grid-chart/pie-grid-chart.component';
import {VerticalBarChartComponent} from './vertical-bar-chart/vertical-bar-chart.component';
import {HorizontalBarChartComponent} from './horizontal-bar-chart/horizontal-bar-chart.component';
import {GroupedVerticalBarChartComponent} from './grouped-vertical-bar-chart/grouped-vertical-bar-chart.component';
import {GroupedHorizontalBarChartComponent} from './grouped-horizontal-bar-chart/grouped-horizontal-bar-chart.component';
import {StackedVarticalBarChartComponent} from './stacked-vartical-bar-chart/stacked-vartical-bar-chart.component';
import {StackedHorizontalBarChartComponent} from './stacked-horizontal-bar-chart/stacked-horizontal-bar-chart.component';
import {NormalizedVarticalBarChartComponent} from './normalized-vartical-bar-chart/normalized-vartical-bar-chart.component';
import {NormalizedHorizontalBarChartComponent} from './normalized-horizontal-bar-chart/normalized-horizontal-bar-chart.component';


const appRoutes: Routes = [
    {path: '', component: HomeComponent, pathMatch: 'full'},
    {path: 'line-chart', component: LineChartComponent},
    {path: 'area-chart', component: AreaChartComponent},
    {path: 'stacked-area-chart', component: StackedAreaChartComponent},
    {path: 'normalized-area-chart', component: NormalizedAreaChartComponent},
    {path: 'pie-chart', component: PieChartComponent},
    {path: 'advanced-pie-chart', component: AdvancedPieChartComponent},
    {path: 'pie-grid-chart', component: PieGridChartComponent},
    {path: 'vertical-bar-chart', component: VerticalBarChartComponent},
    {path: 'horizontal-bar-chart', component: HorizontalBarChartComponent},
    {path: 'grouped-vertical-bar-chart', component: GroupedVerticalBarChartComponent},
    {path: 'grouped-horizontal-bar-chart', component: GroupedHorizontalBarChartComponent},
    {path: 'stacked-vertical-bar-chart', component: StackedVarticalBarChartComponent},
    {path: 'stacked-horizontal-bar-chart', component: StackedHorizontalBarChartComponent},
    {path: 'normalized-vertical-bar-chart', component: NormalizedVarticalBarChartComponent},
    {path: 'normalized-horizontal-bar-chart', component: NormalizedHorizontalBarChartComponent},
    {path: '**', component: PageNotFoundComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
