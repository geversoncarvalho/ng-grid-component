import {NgModule} from '@angular/core';
import {NgGrid, NgGridColumn} from './ng-grid.component';

@NgModule({
    imports: [],
    declarations: [NgGrid, NgGridColumn],
    exports: [NgGrid, NgGridColumn]
})
export class NgGridModule {}