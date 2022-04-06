import { environment } from 'src/environments/environment.prod';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './../../service/auth.service';
import { Usuario } from './../../model/Usuario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  usuario : Usuario = new Usuario()
  idUsuario :number
  comfirmSenha : string
  tipoUser : string

  constructor(
    private authService: AuthService,
    private route : ActivatedRoute,
    private router : Router

  ) { }

  ngOnInit(): void {
    window.scroll(0,0)

    if(environment.token == ''){
      this.router.navigate(['/entrar'])
    }

    this.idUsuario = this.route.snapshot.params['id']
    this.findByIdUsuario(this.idUsuario)
  }

  confirmSenha(event:any){
    this.confirmSenha =event.target.value

  }

  tipoUsuario(event:any){
     this.usuario.tipo = this.tipoUsuario
  }

  atualizar(){
    this.usuario.tipo= this.tipoUsuario

    if(this.usuario.senha != this.confirmSenha){
      alert('As senhas estão incorretas!')
    }
    else{
      this.authService.cadastrar(this.usuario).subscribe((resp:Usuario)=>{
        this.usuario= resp
        this.router.navigate(['/inicio'])
        alert ('Usuario atualizado com sucesso, faça o login novamente')

        environment.token = ''
        environment.nome = ''
        environment.foto = ''
        environment.id = 0
        this.router.navigate(['/entrar'])
      })
    }
  }

  findByIdUsuario(id : number){
     this.authService.getByIdUsuario(id).subscribe((resp: Usuario)=>{
       this.usuario = resp
     })
  }

}
