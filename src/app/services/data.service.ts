import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private localJsonUrl = 'assets/data.json';
  constructor(private http: HttpClient) {}
  getData(): Observable<any> {
    return this.http.get(this.localJsonUrl);
  }
}
