import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url:string = "localhost:3000/usuarios";

  constructor(private http: HttpClient) { }

  getUsuarios():Observable<IUsuario[]>{
    return this.http.get<IUsuario[]>(this.url);
  }
}
