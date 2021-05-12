import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AjudaComponent } from './ajuda/ajuda.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ProdutoComponent } from './edit/produto/produto.component';
import { CategoriaDeleteComponent } from './delete/categoria-delete/categoria-delete.component';
import { CategoriaEditComponent } from './edit/categoria-edit/categoria-edit.component';
import { InicialComponent } from './inicial/inicial.component';
import { InicioClienteComponent } from './inicio-cliente/inicio-cliente.component';
import { InicioProdutorComponent } from './inicio-produtor/inicio-produtor.component';
import { ListaProdutoComponent } from './lista-produto/lista-produto.component';
import { LoginComponent } from './login/login.component';
import { ProdutoProdutorComponent } from './produto-produtor/produto-produtor.component';
import { ProdutoDeleteComponent } from './delete/produtos-delete/produtos-delete.component';

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
{ path: 'editar-produto/:id',component: ProdutoComponent},
{ path: 'delete-produto/:id', component: ProdutoDeleteComponent},
{path: 'admin', component: AdminComponent},
{path: 'categoria-edit/:id', component: CategoriaEditComponent},
{path: 'categoria-delete/:id', component: CategoriaDeleteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

