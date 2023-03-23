import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUsuario } from 'src/app/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url:string = "http://localhost:3000/usuarios";

  constructor(private http: HttpClient) { }

  getUsuarios():Observable<IUsuario[]>{
    return this.http.get<IUsuario[]>(this.url);
  }

  salvarUsuario(usuario: IUsuario): Observable<IUsuario>{
    return this.http.post<IUsuario>(this.url, usuario);
  }
}
