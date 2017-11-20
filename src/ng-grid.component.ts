import {Component, Directive, ContentChildren, QueryList, ElementRef, AfterContentInit, Input} from '@angular/core';

import {NgGridRow} from './ng-grid-row.component';


@Directive({selector: 'ng-grid-column'})
export class NgGridColumn {
    @Input('field') public field:string;
}

@Component({
    selector: 'ng-grid',
    template: `
        <div>NG Grid base</div>
        <table>
            <thead>
            </thead>
            <tbody #bodyContainer>
            </tbody>
        </table>
    `
})
export class NgGrid implements AfterContentInit {

    @ContentChildren(NgGridRow) contentChildren: QueryList<NgGridRow>;

    constructor() {
        //this.buildGrid();
    }

    ngAfterContentInit(): void {
        this.buildGrid();
    }
    
    private buildGrid():void {
        console.log('>> NgGrid >> buildGrid >>', this.contentChildren.first);
    }
}