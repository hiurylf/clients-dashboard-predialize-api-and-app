import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import IClient from '../models/client';
import ITotals, {ITotalsClient} from 'src/app/models/totals';
import {Observable} from 'rxjs';

@Injectable()
export class ClientService {
  private apiUrl = environment.api;

  constructor(private http: HttpClient) {}

  getAll(): Observable<IClient[]> {
    return this.http.get<IClient[]>(`${this.apiUrl}/`);
  }

  getById(id: string): Observable<IClient> {
    return this.http.get<IClient>(`${this.apiUrl}/${id}`);
  }

  getByName(name: string): Observable<IClient[]> {
    return this.http.get<IClient[]>(`${this.apiUrl}/name/${name}`);
  }

  getGeneralTotals(): Observable<ITotals> {
    return this.http.get<ITotals>(`${this.apiUrl}/totals`);
  }

  getTotalsByCompany(clientId: string): Observable<ITotalsClient> {
    return this.http.get<ITotalsClient>(`${this.apiUrl}/${clientId}/totals`);
  }
}
