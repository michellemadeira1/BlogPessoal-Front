import { Usuario } from './../model/Usuario';
import { AuthService } from './../service/auth.service';
import { UsuarioLoginModel } from '../model/UsuarioLoginModel';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

usuario: Usuario = new Usuario
confirmarSenha:string
tipoUsuario: string

  constructor(
 private authService : AuthService,
 private router:Router

  ) { }

  ngOnInit():void {
    window.scroll(0,0)
  }

  confirmSenha(event: any){
      this.confirmarSenha= event.target.value
  }
   
  tipoUser(event : any){
    this.tipoUsuario= event.target.value
  }

  cadastrar(){
    this.usuario.tipo= this.tipoUsuario

    if(this.usuario.senha != this.confirmarSenha){
      alert('As senhas estão incorretas!')
    }
    else{
      this.authService.cadastrar(this.usuario).subscribe((resp:Usuario)=>{
        this.usuario= resp
        this.router.navigate(['/entrar'])
        alert ('Usuario cadastrado com sucesso!')
      })
    }
  }
}
