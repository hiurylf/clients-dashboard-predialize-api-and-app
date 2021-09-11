import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

import { EnterpriseComponent } from './enterprise.component';
import { EnterpriseService } from 'src/app/services/enterprise.service';
import {SearchbarModule} from 'src/app/components/searchbar/searchbar.module';
import {GridListModule} from 'src/app/components/grid-list/grid-list.module';

export const EnterpriseRoutes: Routes = [
  {
    path: 'enterprise',
    component: EnterpriseComponent
  }
];

@NgModule({
    declarations: [EnterpriseComponent],
  imports: [
    SearchbarModule,
    GridListModule,
  ],
    providers: [EnterpriseService],
})
export class EnterpriseModule {}
