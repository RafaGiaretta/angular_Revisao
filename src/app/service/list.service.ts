import { Injectable } from '@angular/core';
import { Animal } from '../Animal';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ListService {
  private apiURL = 'http://localhost:3000/animals';
  constructor(private http: HttpClient) {}

  remove(id: number) {
    return this.http.delete<Animal>(`${this.apiURL}/${id}`);
  }

  getAll(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.apiURL);
  }
  getItem(id: Number): Observable<Animal> {
    return this.http.get<Animal>(`${this.apiURL}/${id}`);
  }
}
