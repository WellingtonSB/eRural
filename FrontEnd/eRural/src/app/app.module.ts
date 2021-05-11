import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RodapeComponent } from './rodape/rodape.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { InicialComponent } from './inicial/inicial.component';
import { FormsModule } from '@angular/forms';
import { MenuClienteComponent } from './menu-cliente/menu-cliente.component';
import { MenuProdutorComponent } from './menu-produtor/menu-produtor.component';
import { AjudaComponent } from './ajuda/ajuda.component';
import { ListaProdutoComponent } from './lista-produto/lista-produto.component';
import { ProdutoProdutorComponent } from './produto-produtor/produto-produtor.component';
import { InicioProdutorComponent } from './inicio-produtor/inicio-produtor.component';



@NgModule({
  declarations: [
    AppComponent,
    RodapeComponent,
    MenuComponent,
    LoginComponent,
    CadastroComponent,
    InicialComponent,
<<<<<<< HEAD
=======
    MenuClienteComponent,
    MenuProdutorComponent,
    AjudaComponent,
    InicioProdutorComponent,
    ListaProdutoComponent,
    ProdutoProdutorComponent
>>>>>>> 71770f3a7da5be0c7819b93285a33191896271ae
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
<<<<<<< HEAD
    FontAwesomeModule
=======
    FontAwesomeModule,
    FormsModule
>>>>>>> 71770f3a7da5be0c7819b93285a33191896271ae
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
