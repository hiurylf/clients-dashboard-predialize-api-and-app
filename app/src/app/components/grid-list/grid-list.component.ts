import {Component, HostListener, Input, OnInit} from '@angular/core';
import IClient from 'src/app/models/client';
import {IEnterpriseClient} from 'src/app/models/enterprise';

@Component({
  selector: 'app-grid-list',
  templateUrl: './grid-list.component.html',
  styleUrls: ['./grid-list.component.scss'],
})
export class GridListComponent implements OnInit {
  @Input() listItems: IClient[] | IEnterpriseClient[];

  @Input() notFoundText: string;

  @Input() showFooterButton = false;

  public columns = 3;

  private screenWidth = 0;

  constructor() {
  }

  ngOnInit() {
    this.screenWidth = window.innerWidth;

    this.calcColumns();
  }

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.screenWidth = window.innerWidth;
    this.calcColumns();
  }

  calcColumns(): void {
    if (this.screenWidth) {
      this.columns = this.screenWidth / 310;
    }
  }

}
