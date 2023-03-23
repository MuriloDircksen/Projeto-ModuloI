import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColecaoService {

  private url: string = "http://localhost:3000/colecoes";

  constructor(private http: HttpClient) { }

  getColecoes(): Observable<IColecoes[]>{
    return this.http.get<IColecoes[]>(this.url);
  }
}
