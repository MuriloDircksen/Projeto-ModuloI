import { IModelo } from './../../models/modelo';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModeloService {
  private url: string = "http://localhost:3000/modelos";

  constructor(private http: HttpClient) { }

  getModelos(): Observable<IModelo[]>{
    return this.http.get<IModelo[]>(this.url);
  }

  getModelo(id: number): Observable<IModelo> {
    return this.http.get<IModelo>(`${this.url}/${id}`)
  }

  criarModelo(modelo: any): Observable<any> {
    return this.http.post<any>(this.url, modelo);
  }

   atualizarModelo(modelo: IModelo): Observable<IModelo> {
    return this.http.put<IModelo>(`${this.url}/${modelo.id}`, modelo);
  }

  excluirModelo(id: number): Observable<IModelo> {
    return this.http.delete<any>(`${this.url}/${id}`);
  }
}
