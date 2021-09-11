import { NgModule } from '@angular/core';

import {MatCardModule} from '@angular/material/card';
import {CardItemComponent} from 'src/app/components/card-item/card-item.component';
import {MatButtonModule} from '@angular/material/button';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [CardItemComponent],
  exports: [
    CardItemComponent
  ],
  imports: [
    MatCardModule,
    MatButtonModule,
    RouterModule,
    CommonModule,
  ],
})
export class CardItemModule { }
