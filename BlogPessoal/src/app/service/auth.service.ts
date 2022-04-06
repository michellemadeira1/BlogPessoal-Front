import { environment } from 'src/environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioLoginModel} from '../model/UsuarioLoginModel'
import{Usuario} from '../model/Usuario'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  entrar( UsuarioLogin: UsuarioLoginModel): Observable<UsuarioLoginModel>{
    return this.http.post<UsuarioLoginModel>('http://localhost:8080/usuarios/logar', UsuarioLoginModel )
}

cadastrar(usuario : Usuario): Observable<Usuario>{
    return this.http.post<Usuario>('http://localhost:8080/usuarios/cadastrar', Usuario)
}


getByIdUsuario(id:number): Observable<Usuario>{
  return this.http.get<Usuario>(`http://localhost:8080/usuarios/${id}`)
}

logado(){
  let ok: boolean = false

  if (environment.token != ''){
    ok = true
  }
  return ok
 }

}