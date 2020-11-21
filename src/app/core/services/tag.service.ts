import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Tag } from 'src/app/shared/models/tag';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  readonly API = environment.api;

  constructor(
    private http: HttpClient
  ) { }

  getTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(`${this.API}/tags`);
  }
}
