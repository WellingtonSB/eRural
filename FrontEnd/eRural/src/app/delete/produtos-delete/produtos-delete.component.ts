import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produtos } from 'src/app/model/Produtos';
import { AuthService } from 'src/app/service/auth.service';
import { ProdutoServiceService } from 'src/app/service/produtos-service.service';
import { environment } from 'src/environments/environment.prod';
@Component({
  selector: 'app-produto-delete',
  templateUrl: './produtos-delete.component.html',
  styleUrls: ['./produtos-delete.component.css']
})
export class ProdutoDeleteComponent implements OnInit {

  produtos: Produtos = new Produtos()
  idPost: number

  token = localStorage.getItem('token')

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private produtosService: ProdutoServiceService,
    private auth: AuthService
  ) { }

  ngOnInit() {
    if (this.token == null) {
      alert('Sua seção expirou, faça o login novamente')
      this.router.navigate(['/inicio'])
    }
    window.scroll(0, 0)
    this.idPost = this.route.snapshot.params['id']
    this.findByIdProdutos(this.idPost)
  }

  findByIdProdutos(id: number) {
    this.produtosService.getByIdProdutos(id).subscribe((resp: Produtos) => {
      this.produtos = resp
    })
  }

  apagar() {
    this.produtosService.deleteProdutos(this.idPost).subscribe(() => {
      alert('Produto apagado com sucesso!')
      if(this.auth.administrador() == true){
        this.router.navigate(['/admin'])
      }else{
        this.router.navigate(['/cadastro-produto'])
      }

    })

  }


}
