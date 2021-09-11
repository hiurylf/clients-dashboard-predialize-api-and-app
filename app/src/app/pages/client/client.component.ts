import {Component, OnInit} from '@angular/core';
import {ClientService} from '../../services/client.service';
import IClient from '../../models/client';
import {take} from 'rxjs/operators';

import ITotals from 'src/app/models/totals';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
})
export class ClientComponent implements OnInit {
  public clients: IClient[];
  public totals: ITotals;

  constructor(private clientService: ClientService) {
  }

  ngOnInit(): void {
    this.getClients();
    this.getTotals();
  }

  getClients(): void {
    this.clientService.getAll().pipe(take(1))
      .subscribe(clientsResp => {
        this.clients = clientsResp;
      });
  }

  getTotals(): void {
    this.clientService.getGeneralTotals().pipe(take(1))
      .subscribe(totals => {
        this.totals = totals;
      });
  }

  searchClients(name: string): void {
    this.clientService.getByName(name).pipe(take(1))
      .subscribe(searchClients => {
        this.clients = searchClients;
      });
  }

  searchChange(search: string): void {
    search ? this.searchClients(search) : this.getClients();
  }
}
