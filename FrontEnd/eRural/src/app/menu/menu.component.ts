import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
    private router: Router,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.desce()
  }

  desce() {
    window.addEventListener("scroll", () => {
      let header = document.querySelector('.header1');
      if (header != null) {
        header.classList.toggle("stick", window.scrollY > 0);
      }
    })
  }

  sair() {
    this.router.navigate(['/login'])
    localStorage.removeItem('token') //environment.token = ''
    environment.id = 0
    environment.nome = ''
    this.mudarMenu()
  }
 
  mudarMenu(){
    let ok: boolean = false
    if(localStorage.getItem('token') != null) {
      ok = true
    }
    return ok
  }

  menuAdm() {
    let ok: boolean = false
    if (this.auth.administrador() == true) {
      ok = true
    }
    return ok
    
  } 

  menuCliente(){
    let ok: boolean = false
    if (this.auth.cliente() == true) {
      ok = true
    }
    return ok
  }

  menuProdutor(){
    let ok: boolean = false
    if (this.auth.produtor() == true) {
      ok = true
    }
    return ok
  }



}



