import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.component.html',
  styleUrls: ['./inicial.component.css']
})
export class InicialComponent implements OnInit {

  private router: Router

  constructor() { }

  ngOnInit() {
    window.scroll(0,0)
  }

  sair(){
    this.router.navigate(['/login'])
    environment.token = ''
    environment.id = 0
    environment.nome = ''
  }




}
