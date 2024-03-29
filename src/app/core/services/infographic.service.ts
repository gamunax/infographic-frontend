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

  getInfographicsMain(page = 1): Observable<Infographic[]> {
    return this.http.get<Infographic[]>(`${this.API}/infografics/outstanding/true/page/${page}`);
  }

  getInfographics(): Observable<Infographic[]> {
    return this.http.get<Infographic[]>(`${this.API}/infografics`);
  }

  getInfographicsByTag(idTag: string): Observable<Infographic[]> {
    return this.http.get<Infographic[]>(`${this.API}/infografics/tag/${idTag}`);
  }

  getInfographicById(id: string): Observable<Infographic> {
    return this.http.get<Infographic>(`${this.API}/infografics/${id}`);
  }
}
