import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AppComponent} from './app.component';
import {LineChartComponent} from './line-chart/line-chart.component';
import {HomeComponent} from './home/home.component';
import {AreaChartComponent} from './area-chart/area-chart.component';
import {StackedAreaChartComponent} from './stacked-area-chart/stacked-area-chart.component';
import {NormalizedAreaChartComponent} from './normalized-area-chart/normalized-area-chart.component';


const appRoutes: Routes = [
    {path: '', component: HomeComponent, pathMatch: 'full'},
    {path: 'line-chart', component: LineChartComponent},
    {path: 'area-chart', component: AreaChartComponent},
    {path: 'stacked-area-chart', component: StackedAreaChartComponent},
    {path: 'normalized-area-chart', component: NormalizedAreaChartComponent},
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
