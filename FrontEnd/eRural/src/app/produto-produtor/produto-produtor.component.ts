import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from 'src/environments/environment.prod';
import { Categorias } from '../model/Categorias';
import { Produtos } from '../model/Produtos';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoServiceService } from '../service/produto-service.service';

@Component({
  selector: 'app-produto-produtor',
  templateUrl: './produto-produtor.component.html',
  styleUrls: ['./produto-produtor.component.css']
})
export class ProdutoProdutorComponent implements OnInit {
  produto: Produtos = new Produtos()

  idUser = environment.id
  categoria: Categorias = new Categorias()
  usuario: Usuario = new Usuario()

  listaCategoria: Categorias[]
  listaProduto: Produtos[]
  idCategoria: number

  constructor(
    //aqui add o router //INJETANDO OS SERVICES
    private router: Router,
    private auth: AuthService,
    private catService: CategoriaService,
    private prodService: ProdutoServiceService
  ) { }

  ngOnInit() {
    if (environment.token == '') {
      alert('Sua seção expirou, faça o login novamente')
      this.router.navigate(['/inicio'])

    }
    window.scroll(0, 0)
    this.findAllCategoria()
  }

  findAllCategoria() {
    this.catService.getAllCategoria().subscribe((resp: Categorias[]) => {
      this.listaCategoria = resp
    })
  }

  findByIdCategoria() {
    this.catService.getByIdCategoria(this.idCategoria).subscribe((resp: Categorias) => {
      this.categoria = resp
    })
  }

  postarProduto() {
    this.categoria.id = this.idCategoria
    this.produto.categorias = this.categoria
    this.usuario.id = this.idUser
    this.produto.usuario = this.usuario

    this.prodService.postProduto(this.produto).subscribe((resp: Produtos) => {
      this.produto = resp
      alert('Cadastrou com sucesso!')
      this.produto = new Produtos
      this.router.navigate(['/inicio-produtor'])

    })

  }



}
