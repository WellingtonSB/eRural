import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Categorias } from '../model/Categorias';
import { Produtos } from '../model/Produtos';
import { Usuario } from '../model/Usuario';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';
import { CategoriaService } from '../service/categoria.service';
import { ProdutoServiceService } from '../service/produtos-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  produto: Produtos = new Produtos()

  idUser = environment.id
  categoria: Categorias = new Categorias()
  usuario: Usuario = new Usuario()

  token = localStorage.getItem('token')

  listaCategoria: Categorias[]
  listaProduto: Produtos[]
  idCategoria: number

  constructor(
    private router: Router,
    private auth: AuthService,
    private categoriaService: CategoriaService,
    private alertas: AlertasService
  ) { }

  ngOnInit() {
    if(this.token == null){
      this.router.navigate(['/home'])
    }
    window.scroll(0,0)
    this.findAllCategorias()
  }


  findAllCategorias(){
    this.categoriaService.getAllCategoria().subscribe((resp: Categorias[])=>{
      this.listaCategoria = resp
    })
  }

  findByIdUser(){
    this.auth.getByIdUSer(this.idUser).subscribe((resp: Usuario)=>{
      this.usuario = resp
    })
  }

  findByIdCategoria(){
    this.categoriaService.getByIdCategoria(this.idCategoria).subscribe((resp: Categorias)=>{
      this.categoria = resp
    })
  }

  cadastrarCategoria(){
    this.categoriaService.postCategoria(this.categoria).subscribe((resp: Categorias)=>{
      this.categoria = resp
      this.alertas.showAlertSuccess('Categoria cadastrada com sucesso!')
      this.findAllCategorias()
      this.categoria = new Categorias() //PARA ZERAR O CAMPO DE CATEGORIA APÓS CADASTRAR A CATEGORIA NOVA
    })
  }
}



