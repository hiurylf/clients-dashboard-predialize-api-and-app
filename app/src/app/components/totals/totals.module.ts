import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalsComponent } from 'src/app/components/totals/totals.component';

@NgModule({
  declarations: [TotalsComponent],
  exports: [
    TotalsComponent,
  ],
  imports: [
    CommonModule,
  ],
})
export class TotalsModule { }
