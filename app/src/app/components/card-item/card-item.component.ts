import { Component, Input } from '@angular/core';
import IClient from 'src/app/models/client';
import IEnterprise, {IEnterpriseClient} from 'src/app/models/enterprise';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent {
  @Input() value: IClient | IEnterpriseClient | IEnterprise;

  @Input() showFooterButton = false;

  constructor() {}
}
