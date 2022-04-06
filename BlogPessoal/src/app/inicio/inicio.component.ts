import { AuthService } from './../service/auth.service';
import { environment } from './../../environments/environment.prod';
import { Usuario } from './../model/Usuario';
import { TemaService } from './../service/tema.service';
import { Tema } from './../model/Tema';
import { PostagemService } from './../service/postagem.service';

import { Postagem } from './../model/Postagem';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

 postagem : Postagem = new Postagem()
 listaPostagens :Postagem[]
 tema :Tema = new Tema()
 listaTemas : Tema[]
 idTema : number

 usuario : Usuario = new Usuario()
 idUsuario : environment.id

  constructor(
    private router: Router,
    private postagemService : PostagemService,
    private temaService : TemaService,
    private authService: AuthService
    
  ) { }

  ngOnInit(): void {

    window.scroll(0,0)

    if (environment.token == '' ){
      this.router.navigate(['/entrar'])
    }
    this.getAllTemas()
    this.getAllPostagens()
  }

  getAllTemas(){
    this.temaService.getAllTema().subscribe((resp: Tema[])=>{
      this.listaTemas = resp
    })
  }

  findByIdTema(){
  this.temaService.getByIdTema(this.idTema).subscribe((resp:Tema)=>{
    this.tema = resp
  })
  }

  getAllPostagens(){
    this.postagemService.getAllPostagens().subscribe((resp:Postagem[])=>{
      this.listaPostagens = resp
    })
  }

  findByIdUsuario(){
    this.authService.getByIdUsuario(this.idUsuario).subscribe((resp: Usuario)=>{
      this.usuario = resp
    } )
  }



  publicar(){
    this.tema.id = this.idTema
    this.postagem.tema = this .tema

    this.usuario.id = this.idUsuario
    this.postagem.usuario = this.usuario

    this.postagemService.postPostagem(this.postagem).subscribe((resp : Postagem)=>{
      this.postagem = resp
      alert ('Postagem realizada com sucesso!')
      this.postagem = new Postagem()
      this.getAllPostagens()
    })
  }

}
