import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Produtos } from '../model/Produtos';
import { ProdutoServiceService } from '../service/produto-service.service';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styleUrls: ['./lista-produto.component.css']
})
export class ListaProdutoComponent implements OnInit {

  produto: Produtos = new Produtos
  listaProdutos: Produtos[]


  constructor(
    private router: Router,
    private produtoService: ProdutoServiceService
  ) { }

  ngOnInit() {

    if(environment.token != ''){
      this.findAllProduto() /* QUERO Q APAREÇA QUANDO A TELA INICIAR */
     
    }
    this.findAllProduto()
  }

  findAllProduto(){

    this.produtoService.getAllProduto().subscribe((resp: Produtos[])=>{
      this.listaProdutos = resp

    })
  }

}
