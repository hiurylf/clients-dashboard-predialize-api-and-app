import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {Observable} from 'rxjs';
import IEnterprise, {IEnterpriseClient} from 'src/app/models/enterprise';

@Injectable()
export class EnterpriseService {
  private apiUrl = environment.api;

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<IEnterprise[]> {
    return this.http.get<IEnterprise[]>(`${this.apiUrl}/enterprise`);
  }

  getByName(name: string): Observable<IEnterprise[]> {
    return this.http.get<IEnterprise[]>(`${this.apiUrl}/enterprise/name/${name}`);
  }

  getByNameAndClient(clientId: string, name: string): Observable<IEnterpriseClient[]> {
    return this.http.get<IEnterpriseClient[]>(`${this.apiUrl}/${clientId}/enterprise/name/${name}`);
  }

  getEnterprisesByClient(clientId): Observable<IEnterpriseClient[]> {
    return this.http.get<IEnterpriseClient[]>(`${this.apiUrl}/${clientId}/enterprise`);
  }
}
