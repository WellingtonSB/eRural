import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { RodapeComponent } from './rodape/rodape.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { InicialComponent } from './inicial/inicial.component';
import { AjudaComponent } from './ajuda/ajuda.component';
import { ListaProdutoComponent } from './lista-produto/lista-produto.component';
import { ProdutoProdutorComponent } from './produto-produtor/produto-produtor.component';
import { InicioProdutorComponent } from './inicio-produtor/inicio-produtor.component';
import { InicioClienteComponent } from './inicio-cliente/inicio-cliente.component';
import { ProdutoComponent } from './edit/produto/produto.component';
import { AdminComponent } from './admin/admin.component';
import { CategoriaEditComponent } from './edit/categoria-edit/categoria-edit.component';
import { CategoriaDeleteComponent } from './delete/categoria-delete/categoria-delete.component';
import { AlertasComponent } from './alertas/alertas.component';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';





@NgModule({
  declarations: [
    AppComponent,
    RodapeComponent,
    MenuComponent,
    LoginComponent,
    CadastroComponent,
    InicialComponent,
    AjudaComponent,
    InicioProdutorComponent,
    ListaProdutoComponent,
    ProdutoProdutorComponent,
    InicioClienteComponent,
    ProdutoComponent,
    AdminComponent,
    CategoriaEditComponent,
    CategoriaDeleteComponent,
    AlertasComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
