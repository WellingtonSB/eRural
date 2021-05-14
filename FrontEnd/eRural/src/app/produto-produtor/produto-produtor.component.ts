import { Produtos } from './../model/Produtos';
import { AlertasService } from './../service/alertas.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from 'src/environments/environment.prod';
import { Categorias } from '../model/Categorias';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoServiceService } from '../service/produtos-service.service';

@Component({
  selector: 'app-produto-produtor',
  templateUrl: './produto-produtor.component.html',
  styleUrls: ['./produto-produtor.component.css']
})
export class ProdutoProdutorComponent implements OnInit {
  produto: Produtos = new Produtos()
  produtoUser: boolean = false
  idUser = environment.id
  categoria: Categorias = new Categorias()
  usuario: Usuario = new Usuario()
  nomeProduto: string
  

  token = localStorage.getItem('token')

  listaCategoria: Categorias[]
  listaProduto: Produtos[]
  idCategoria: number
  nomeCategoria: string

  key = 'data'
  reverse = true

  constructor(
    //aqui add o router //INJETANDO OS SERVICES
    private router: Router,
    private auth: AuthService,
    private catService: CategoriaService,
    private prodService: ProdutoServiceService,
    private alertas: AlertasService
  ) { }

  ngOnInit() {
    if (this.token == null) {
      this.alertas.showAlertDanger('Sua seção expirou, faça o login novamente')
      this.router.navigate(['/inicio'])
    }
    window.scroll(0, 0)
    this.findAllCategoria()
    //this.findByIdUsuario()
    this.findAllProdutos()
  }

  findAllCategoria() {
    this.catService.getAllCategoria().subscribe((resp: Categorias[]) => {
      this.listaCategoria = resp
    })
  }

  findAllProdutos(){
    this.prodService.getAllProduto().subscribe((resp: Produtos[])=>{
     this.listaProduto = resp
     
      /* resp.forEach((item)=>{
        if(item.usuario.id == this.idUser){
          this.produtoUser = true
        }else {
          this.produtoUser = false
        }
      }) */

    })
  }

  findByIdCategoria() {
    this.catService.getByIdCategoria(this.idCategoria).subscribe((resp: Categorias) => {
      this.categoria = resp
    })
  }

  findByIdUsuario(){
      this.auth.getByIdUSer(this.idUser).subscribe((resp: Usuario)=>{
      this.usuario = resp
      /* this.postarProduto() */
      this.produto = new Produtos()
    })
  }

  postarProduto() {
    this.categoria.id = this.idCategoria
    this.produto.categorias = this.categoria
    this.usuario.id = this.idUser
    this.produto.usuario = this.usuario
    console.log(this.produto)
    this.prodService.postProduto(this.produto).subscribe((resp: Produtos) => {
      this.produto = resp
      this.alertas.showAlertSuccess('Cadastro realizado com sucesso!')
      this.produto = new Produtos()
      this.router.navigate(['/inicio-produtor'])

    })
  }

  
  findByNomeProduto(){
    /* this.alertas.showAlertSuccess('Num vaiiiiiiii!')*/
      if(this.nomeProduto == '') {
        this.findAllProdutos()
        console.log('thcau if ' + this.nomeProduto)
      } else {       
        console.log("oi else" + this.nomeProduto)
        this.prodService.getByNomeProduto(this.nomeProduto).subscribe((resp: Produtos[]) => {
          this.listaProduto = resp
        })
      } 
  }

  findByNomeCategoria(){
    if(this.nomeProduto == '') {
      this.findAllCategoria()
    } else {       
      this.catService.getByNomeCategoria(this.nomeCategoria).subscribe((resp: Categorias[]) => {
        this.listaCategoria = resp
      })
     } 

}

}
