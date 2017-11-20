import {Component, Input} from '@angular/core';

@Component({
    selector: 'ng-grid-row',
    template: `
        <tr>
            <td>Testing</td>
        </tr>
    `
})
export class NgGridRow {
    @Input('row') public row:any;
}