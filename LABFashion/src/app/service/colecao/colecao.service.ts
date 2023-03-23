import { IColecao } from './../../models/colecao';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColecaoService {

  private url: string = "http://localhost:3000/colecoes";

  constructor(private http: HttpClient) { }

  getColecoes(): Observable<IColecao[]>{
    return this.http.get<IColecao[]>(this.url);
  }
}
