import { Observable } from 'rxjs';
import { Tema } from './../model/Tema';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http: HttpClient) { }

  token={
    headers:new HttpHeaders().set('Authorization', environment.token)
  }

  postarTema(tema : Tema): Observable <Tema>{
    return this.http.post<Tema>('http://localhost:8080/tema', tema, this.token) // texto

  }

  getAllTema(): Observable<Tema[]>{
    return this.http.get<Tema[]>('http://localhost:8080/tema', this.token)

  }
  getByIdTema(id:number): Observable<Tema>{
    return this.http.post<Tema>(`http://localhost:8080/tema/${id}`, this.token)
  }

  putTema(tema:Tema): Observable<Tema>{
    return this.http.put<Tema>('http://localhost:8080/tema', Tema , this.token)
  }

  deleteTema(id:number){
    return this.http.delete(`http://localhost:8080/tema/${id}`, this.token)
  }

}

