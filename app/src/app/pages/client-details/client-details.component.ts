import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {take} from 'rxjs/operators';
import {ClientService} from 'src/app/services/client.service';
import {IClientDetails} from 'src/app/models/client';
import {ITotalsClient} from 'src/app/models/totals';
import {IEnterpriseClient} from 'src/app/models/enterprise';
import {EnterpriseService} from 'src/app/services/enterprise.service';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.scss'],
})
export class ClientDetailsComponent implements OnInit {
  public client: IClientDetails;
  public totals: ITotalsClient;
  public enterprises: IEnterpriseClient[];

  private clientId: string;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private clientService: ClientService,
              private enterpriseService: EnterpriseService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(take(1)).subscribe(params => {
      if (params && params.id) {
        this.clientId = params.id;

        this.getClient();
      }
    });
  }

  getClient(): void {
    this.clientService.getById(this.clientId).pipe(take(1))
      .subscribe(client => {
        this.client = client;

        this.getTotals();
        this.getEnterprises();
      }, () => this.router.navigate(['client']));
  }

  getTotals(): void {
    this.clientService.getTotalsByCompany(this.clientId).pipe(take(1))
      .subscribe(totals => {
        this.totals = totals;
      });
  }

  getEnterprises(): void {
    this.enterpriseService.getEnterprisesByClient(this.clientId).pipe(take(1))
      .subscribe(enterprises => {
        this.enterprises = enterprises;
      });
  }

  searchEnterprises(name: string): void {
    this.enterpriseService.getByNameAndClient(this.clientId, name).pipe(take(1))
      .subscribe(enterprises => {
        this.enterprises = enterprises;
      });
  }

  searchChange(search: string): void {
    search ? this.searchEnterprises(search) : this.getEnterprises();
  }

}
