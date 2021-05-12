import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorias } from 'src/app/model/Categorias';
import { Produtos } from 'src/app/model/Produtos';
import { AuthService } from 'src/app/service/auth.service';
import { CategoriaService } from 'src/app/service/categoria.service';
import { ProdutoServiceService } from 'src/app/service/produtos-service.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  produto: Produtos = new Produtos()
  idProduto:Produtos
  listaProdutos: Produtos[]

  categorias:Categorias = new Categorias()
  listaCategorias: Categorias[]
  idCategoria: number

  constructor(
    private produtosService: ProdutoServiceService,
    private router:Router,
    private route:ActivatedRoute,
    private categoriaService: CategoriaService
  ) { }

  ngOnInit() {
    if(environment.token ==''){
      this.router.navigate(['/inicio'])
    }
    let id = this.route.snapshot.params['id']
    this.findByIdProduto(id)
  }

  findByIdProduto(id:number){
    this.produtosService.getByIdProdutos(id).subscribe((resp:Produtos)=>{
      this.produto = resp
    })
  }

  findByIdCategoria() {
    this.categoriaService.getByIdCategoria(this.idCategoria).subscribe((response: Categorias) => {
      this.categorias = response;
    });
  }

  atualiza(){
    /*   this.categorias.id = this.idCategoria;
      this.produto.categorias = this.categorias; */
      this.produtosService.putProduto(this.produto).subscribe((resp: Produtos)=>{
      this.produto = resp
      alert('Produto atualizado com sucesso!')
      this.router.navigate(['/listaProdutos'])
    })
  }


}
