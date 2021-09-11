import {Component, OnInit} from '@angular/core';
import {EnterpriseService} from '../../services/enterprise.service';
import IEnterprise, {IEnterpriseClient} from 'src/app/models/enterprise';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-enterprise',
  templateUrl: './enterprise.component.html',
  styleUrls: ['./enterprise.component.scss'],
})
export class EnterpriseComponent implements OnInit {
  public enterprises: IEnterprise[];

  constructor(private enterpriseService: EnterpriseService) {
  }

  ngOnInit(): void {
    this.getEnterprises();
  }

  getEnterprises(): void {
    this.enterpriseService.getAll().pipe(take(1))
      .subscribe(enterprises => {
        this.enterprises = enterprises;
        console.table(enterprises);
      });
  }

  searchEnterprises(name: string): void {
    this.enterpriseService.getByName(name).pipe(take(1))
      .subscribe(enterprises => {
        this.enterprises = enterprises;
      });
  }

  searchChange(search: string): void {
    search ? this.searchEnterprises(search) : this.getEnterprises();
  }
}
