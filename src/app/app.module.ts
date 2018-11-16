import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialModule} from './material/material.module';

import {AppComponent} from './app.component';
import {LineChartComponent} from './line-chart/line-chart.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {MenuListItemComponent} from './menu-list-item/menu-list-item.component';
import {HomeComponent} from './home/home.component';
import {AreaChartComponent} from './area-chart/area-chart.component';
import {StackedAreaChartComponent} from './stacked-area-chart/stacked-area-chart.component';
import {NormalizedAreaChartComponent} from './normalized-area-chart/normalized-area-chart.component';
import {PieChartComponent} from './pie-chart/pie-chart.component';
import {AdvancedPieChartComponent} from './advanced-pie-chart/advanced-pie-chart.component';
import {PieGridChartComponent} from './pie-grid-chart/pie-grid-chart.component';
import {VerticalBarChartComponent} from './vertical-bar-chart/vertical-bar-chart.component';
import {HorizontalBarChartComponent} from './horizontal-bar-chart/horizontal-bar-chart.component';

@NgModule({
    declarations: [
        AppComponent,
        LineChartComponent,
        PageNotFoundComponent,
        MenuListItemComponent,
        HomeComponent,
        AreaChartComponent,
        StackedAreaChartComponent,
        NormalizedAreaChartComponent,
        PieChartComponent,
        AdvancedPieChartComponent,
        PieGridChartComponent,
        VerticalBarChartComponent,
        HorizontalBarChartComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        NgxChartsModule,
        FlexLayoutModule,
        MaterialModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
