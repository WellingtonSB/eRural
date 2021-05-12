import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produtos } from 'src/app/model/Produtos';
import { ProdutoServiceService } from 'src/app/service/produtos-service.service';
import { environment } from 'src/environments/environment.prod';
@Component({
  selector: 'app-produto-delete',
  templateUrl: './produto-delete.component.html',
  styleUrls: ['./produto-delete.component.css']
})
export class ProdutoDeleteComponent implements OnInit {

  produtos : Produtos = new Produtos()
  idPost: number

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private produtosService: ProdutoServiceService

  ) { }

  ngOnInit(){
    window.scroll(0,0)

    if(environment.token == ''){
      this.router.navigate(['/inicio'])
    }

    this.idPost = this.route.snapshot.params['id']
    this.findByIdProdutos(this.idPost)
  }

  findByIdProdutos(id:number){
    this.produtosService.getByIdProdutos(id).subscribe((resp: Produtos) => {
      this.produtos = resp
    })
  }

  apagar(){
    this.produtosService.deleteProdutos(this.idPost).subscribe(() =>{
      alert('Produto apagado com sucesso!')
      this.router.navigate(['/listaProdutos'])
    })
      
  }


}
