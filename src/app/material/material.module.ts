import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';

@NgModule({
    imports: [
        CommonModule,
        MatToolbarModule,
        MatMenuModule,
        MatButtonModule,
        MatSidenavModule,
        MatCheckboxModule,
        MatIconModule,
        MatListModule
    ],
    exports: [
        MatToolbarModule,
        MatMenuModule,
        MatButtonModule,
        MatSidenavModule,
        MatCheckboxModule,
        MatIconModule,
        MatListModule
    ],
    declarations: []
})
export class MaterialModule {
}
