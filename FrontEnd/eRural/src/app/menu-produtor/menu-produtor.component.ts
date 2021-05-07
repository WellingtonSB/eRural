import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-menu-produtor',
  templateUrl: './menu-produtor.component.html',
  styleUrls: ['./menu-produtor.component.css']
})
export class MenuProdutorComponent implements OnInit {

  constructor(
    public auth: AuthService,
    public router: Router
    
  ) { }

  ngOnInit() {
    window.scroll(0,0)
    this.desce()
  }


desce(){

  window.addEventListener("scroll", ()=>{ 
    let header = document.querySelector('.header1');
    if (header != null){
      header.classList.toggle("stick", window.scrollY > 0);
    }
    
})
  
} 

sair(){
  this.router.navigate(['/login'])
  environment.token = ''
  environment.id = 0
  environment.nome = ''
}


}
