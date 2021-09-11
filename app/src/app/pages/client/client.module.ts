import {NgModule} from '@angular/core';
import {Routes} from '@angular/router';
import {CommonModule} from '@angular/common';

import {ClientComponent} from './client.component';
import {ClientService} from 'src/app/services/client.service';
import {SearchbarModule} from 'src/app/components/searchbar/searchbar.module';
import {TotalsModule} from 'src/app/components/totals/totals.module';
import {GridListModule} from 'src/app/components/grid-list/grid-list.module';

export const ClientRoutes: Routes = [
  {
    path: 'client',
    component: ClientComponent,
  },
];

@NgModule({
  declarations: [ClientComponent],
  providers: [ClientService],
  imports: [
    SearchbarModule,
    CommonModule,
    TotalsModule,
    GridListModule,
  ],
})
export class ClientModule {
}
