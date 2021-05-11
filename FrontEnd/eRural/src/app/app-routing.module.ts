import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjudaComponent } from './ajuda/ajuda.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ProdutoComponent } from './edit/produto/produto.component';
import { InicialComponent } from './inicial/inicial.component';
import { InicioClienteComponent } from './inicio-cliente/inicio-cliente.component';
import { InicioProdutorComponent } from './inicio-produtor/inicio-produtor.component';
import { ListaProdutoComponent } from './lista-produto/lista-produto.component';
import { LoginComponent } from './login/login.component';
import { ProdutoProdutorComponent } from './produto-produtor/produto-produtor.component';

const routes: Routes = [
{path: "", redirectTo: 'inicio', pathMatch: 'full' },

{path: 'login', component: LoginComponent},
{path: 'cadastro', component: CadastroComponent},
{path: 'inicio', component: InicialComponent},
{path: 'listaProdutos', component: ListaProdutoComponent},
{path: 'ajuda', component: AjudaComponent},
{ path: 'inicio-produtor',component:InicioProdutorComponent},
{ path: 'cadastro-produto', component:ProdutoProdutorComponent},
{ path: 'inicio-cliente',component:InicioClienteComponent},
{ path: 'editar-produto/:id',component: ProdutoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

