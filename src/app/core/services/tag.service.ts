import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Tag } from 'src/app/shared/models/tag';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  constructor(
    private http: HttpClient
  ) { }

  getTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>('http://localhost:1337/tags');
  }
}
