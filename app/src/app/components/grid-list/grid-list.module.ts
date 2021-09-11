import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridListComponent } from 'src/app/components/grid-list/grid-list.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {CardItemModule} from 'src/app/components/card-item/card-item.module';


@NgModule({
  declarations: [GridListComponent],
  imports: [
    CommonModule,
    MatGridListModule,
    CardItemModule,
  ],
  exports: [
    GridListComponent,
  ],
})
export class GridListModule { }
