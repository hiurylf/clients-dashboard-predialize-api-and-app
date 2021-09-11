import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes} from '@angular/router';

import {ClientDetailsComponent} from 'src/app/pages/client-details/client-details.component';
import {SearchbarModule} from 'src/app/components/searchbar/searchbar.module';
import {MatCardModule} from '@angular/material/card';
import {TotalsModule} from 'src/app/components/totals/totals.module';
import {GridListModule} from 'src/app/components/grid-list/grid-list.module';

export const ClientDetailsRoutes: Routes = [
  {
    path: 'client/:id',
    component: ClientDetailsComponent,
  },
];

@NgModule({
  declarations: [ClientDetailsComponent],
  imports: [
    CommonModule,
    SearchbarModule,
    MatCardModule,
    TotalsModule,
    GridListModule,
  ],
})
export class ClientDetailsModule {
}
