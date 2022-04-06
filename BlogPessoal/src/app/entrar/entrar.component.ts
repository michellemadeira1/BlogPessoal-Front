import { environment } from 'src/environments/environment.prod';
import { Router } from '@angular/router';
import { AuthService } from './../service/auth.service';
import { UsuarioLoginModel } from './../model/UsuarioLoginModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  usuarioLoginModel :UsuarioLoginModel

  constructor(
    
    private auth : AuthService,
    private  router :Router
    ) { }

  ngOnInit(): void {
    window.scroll(0,0)
  }

entar(){
this.auth.entrar(this.usuarioLoginModel).subscribe((resp: UsuarioLoginModel)=>{
  this.usuarioLoginModel = resp

  environment.token = this.usuarioLoginModel.token
  environment.nome = this.usuarioLoginModel.nome
  environment.foto = this.usuarioLoginModel.foto
  environment.id = this.usuarioLoginModel.id



this.router.navigate(['/inicio'])
}, erro =>{
  if (erro.status == 500){
    alert('Usuário ou senhas estão incorretos!')
  }

})

}
}