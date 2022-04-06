import { UserEditComponent } from './edit/user-edit/user-edit.component';
import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { InicioComponent } from './inicio/inicio.component';
import { TemaComponent } from './tema/tema.component';

import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EntrarComponent } from './entrar/entrar.component';
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';

const routes: Routes = [

  { path: '', redirectTo: 'entrar', pathMatch: 'full' },

  { path: 'entrar', component: EntrarComponent },
  { path: 'cadastrar', component: CadastrarComponent },

  { path: 'inicio', Component: InicioComponent},
  { path: 'tema', component: TemaComponent},

  { path: 'tema-edit/:id', component: TemaEditComponent},
  { path: 'tema-delete/:id', Component : TemaDeleteComponent},
  { path: 'postagem-edit/:id', Component: PostagemEditComponent},
  { path: 'postagem-delete/:id', Component : PostagemDeleteComponent},
  { path: 'user-edit/:id', Component: UserEditComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
