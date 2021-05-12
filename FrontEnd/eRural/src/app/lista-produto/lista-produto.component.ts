import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categorias } from '../model/Categorias';
import { Produtos } from '../model/Produtos';
import { AuthService } from '../service/auth.service';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoServiceService } from '../service/produto-service.service';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styleUrls: ['./lista-produto.component.css']
})
export class ListaProdutoComponent implements OnInit {

  produto: Produtos = new Produtos()
  listaProdutos: Produtos[]

  categoria:Categorias = new Categorias()
  listaCategorias: Categorias[]

  constructor(
    public router: Router,
    public authService:AuthService,
    private produtoService: ProdutoServiceService,
    private categoriaService: CategoriaService
  ){}


  ngOnInit() {
    if(environment.token != ''){
      this.findAllProduto() /*QUERO Q APAREÇA QUANDO A TELA INICIAR*/
    }
    this.findAllProduto()
    this.findAllCategoria()
  }
  findAllProduto(){
    this.produtoService.getAllProduto().subscribe((resp: Produtos[])=>{
      this.listaProdutos = resp

    })
  }

  findAllCategoria(){
    this.categoriaService.getAllCategoria().subscribe((resp:Categorias[])=>{
      this.listaCategorias=resp
    })
  }



}
