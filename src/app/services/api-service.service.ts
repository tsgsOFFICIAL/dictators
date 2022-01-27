import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dictator } from '../dictators/dictator';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  url: string = "http://127.0.0.1:5000/api/dictator";

  constructor(private http: HttpClient) { }

  add(dictator: any) {
    return this.http.post<any>(this.url, dictator);
  }

  remove(dictatorId: any) {
    return this.http.delete<any>(`${this.url}/${dictatorId}`, dictatorId);
  }

  get(): Observable<Dictator[]> {
    return this.http.get<Dictator[]>(this.url);
  }
}
