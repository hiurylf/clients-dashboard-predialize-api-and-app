import {Component, Input} from '@angular/core';
import ITotals, {ITotalsClient} from 'src/app/models/totals';

@Component({
  selector: 'app-totals',
  templateUrl: './totals.component.html',
  styleUrls: ['./totals.component.scss']
})
export class TotalsComponent {

  @Input() totals: ITotals | ITotalsClient;
}
