import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produtos } from '../model/Produtos';
import { ProdutoServiceService } from '../service/produto-service.service';

@Component({
  selector: 'app-produto-produtor',
  templateUrl: './produto-produtor.component.html',
  styleUrls: ['./produto-produtor.component.css']
})
export class ProdutoProdutorComponent implements OnInit {
  produto:Produtos = new Produtos()

  constructor(
    private produtoService: ProdutoServiceService,
    private router: Router
  ){}

  ngOnInit() {
   
    window.scroll(0, 0)
  }

  cadastrar() { 
    this.produtoService.postProduto(this.produto).subscribe((resp:Produtos)=>{
      this.produto =resp
      alert('Foi!')
      this.produto = new Produtos()
    })
              
  }
}
