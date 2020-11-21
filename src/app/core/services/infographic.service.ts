import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Infographic } from 'src/app/shared/models/infographic';

@Injectable({
  providedIn: 'root'
})
export class InfographicService {

  readonly API = environment.api;

  constructor(
    private http: HttpClient
  ) { }

  getInfographics(): Observable<Infographic[]> {
    return this.http.get<Infographic[]>(`${this.API}/infografics`);
  }
}
