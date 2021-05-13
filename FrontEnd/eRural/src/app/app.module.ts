import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RodapeComponent } from './rodape/rodape.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { InicialComponent } from './inicial/inicial.component';
import { FormsModule } from '@angular/forms';
import { AjudaComponent } from './ajuda/ajuda.component';
import { ListaProdutoComponent } from './lista-produto/lista-produto.component';
import { ProdutoProdutorComponent } from './produto-produtor/produto-produtor.component';
import { InicioProdutorComponent } from './inicio-produtor/inicio-produtor.component';
import { InicioClienteComponent } from './inicio-cliente/inicio-cliente.component';
import { ProdutoComponent } from './edit/produto/produto.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { CategoriaEditComponent } from './edit/categoria-edit/categoria-edit.component';
import { CategoriaDeleteComponent } from './delete/categoria-delete/categoria-delete.component';





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



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
