import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Produtos } from '../model/Produtos';
import { ProdutoServiceService } from '../service/produto-service.service';

@Component({
  selector: 'app-produto-produtor',
  templateUrl: './produto-produtor.component.html',
  styleUrls: ['./produto-produtor.component.css']
})
export class ProdutoProdutorComponent implements OnInit {
  produto:Produtos = new Produtos

  constructor(
    private route: ActivatedRoute,
    private produtoService: ProdutoServiceService,
    private router: Router
  ){}

  ngOnInit() {
    if(environment.token == ''){
      this.router.navigate(['/entrar'])
    }
    window.scroll(0, 0)
  }

  cadastrarProduto() {
    
    this.produto = this.produto

    this.produtoService.postProduto(this.produto).subscribe((resp:Produtos) =>{
      this.produto = resp
      this.router.navigate(['/inicio'])
      alert('Produto cadastrado!')
    }) 
           
  }




}
