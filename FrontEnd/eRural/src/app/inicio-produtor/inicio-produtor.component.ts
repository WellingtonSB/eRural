import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-inicio-produtor',
  templateUrl: './inicio-produtor.component.html',
  styleUrls: ['./inicio-produtor.component.css']
})
export class InicioProdutorComponent implements OnInit {

  constructor(
    private router:Router
  ){}

  ngOnInit() {
    if (environment.token == '') {
      alert('Sua seção expirou, faça o login novamente')
      this.router.navigate(['/inicio'])
      window.scroll(0, 0)
    }
  }
  
  sair(){
    this.router.navigate(['/entrar'])
    environment.token=''
    environment.nome=''
    environment.id=0
    }
}
