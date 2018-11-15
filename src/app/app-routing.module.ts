import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AppComponent} from './app.component';
import {LineChartComponent} from './line-chart/line-chart.component';


const appRoutes: Routes = [
    {path: '', redirectTo: '/line-chart', pathMatch: 'full'},
    {path: 'line-chart', component: LineChartComponent},
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
