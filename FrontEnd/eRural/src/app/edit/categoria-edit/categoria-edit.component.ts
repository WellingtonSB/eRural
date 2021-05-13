import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorias } from 'src/app/model/Categorias';
import { CategoriaService } from 'src/app/service/categoria.service';

@Component({
  selector: 'app-categoria-edit',
  templateUrl: './categoria-edit.component.html',
  styleUrls: ['./categoria-edit.component.css']
})
export class CategoriaEditComponent implements OnInit {

  categoria: Categorias = new Categorias()
  token = localStorage.getItem('token')
  
  constructor(
    private catService: CategoriaService,
    private router: Router,
    private route: ActivatedRoute
  ) { }
 
  ngOnInit() {
    if (this.token == null) {
      alert('Sua seção expirou, faça o login novamente')
      this.router.navigate(['/inicio'])
    }
    window.scroll (0,0)
    let id = this.route.snapshot.params['id']
    this.findByIdTema(id)
  }

  findByIdTema(id: number){
    /* como pega a rota ativa do momento? */
    this.catService.getByIdCategoria(id).subscribe((resp: Categorias)=> {
      this.categoria = resp
    })
  }

  atualizar(){
    this.catService.putCategoria(this.categoria).subscribe((resp: Categorias)=>{
      this.categoria = resp
      alert('Categoria atualizada com sucesso')
      this.router.navigate(['/admin'])
    })
  }


}

