import { IModelo } from './../../models/modelo';
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

  getColecao(id: number): Observable<IColecao> {
    return this.http.get<IColecao>(`${this.url}/${id}`)
  }

  criarColecao(colecao: any): Observable<any> {
    return this.http.post<any>(this.url, colecao);
  }

   atualizarColecao(colecao: IColecao): Observable<IColecao> {
    return this.http.put<IColecao>(`${this.url}/${colecao.id}`, colecao);
  }

  excluirColecao(id: number): Observable<IColecao> {
    return this.http.delete<any>(`${this.url}/${id}`);
  }
}
