import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorias } from 'src/app/model/Categorias';
import { CategoriaService } from 'src/app/service/categoria.service';

@Component({
  selector: 'app-categoria-delete',
  templateUrl: './categoria-delete.component.html',
  styleUrls: ['./categoria-delete.component.css']
})
export class CategoriaDeleteComponent implements OnInit {

  categoria: Categorias = new Categorias()
  idCategoria: number

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private catService: CategoriaService
  ) { }

  ngOnInit() {
    window.scroll(0,0)

    this.idCategoria = this.route.snapshot.params['id']
    this.findByIdCategoria(this.idCategoria)
  }

  apagar(){
    this.catService.deleteCategoria(this.idCategoria).subscribe(()=>{
      alert('Categoria apagada com sucesso!')
      this.router.navigate(['/admin'])
    })
  }

  findByIdCategoria(id: number){
    this.catService.getByIdCategoria(id).subscribe((resp: Categorias)=>{
      this.categoria = resp
    })
  }



}
