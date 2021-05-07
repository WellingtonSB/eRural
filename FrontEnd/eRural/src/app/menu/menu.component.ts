import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
    private router: Router
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

  desce(){

    window.addEventListener("scroll", ()=>{ 
      let header = document.querySelector('.header1');
      if (header != null){
        header.classList.toggle("stick", window.scrollY > 0);
      }
      
  })
    
  } 

}
