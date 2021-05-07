import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produto-produtor',
  templateUrl: './produto-produtor.component.html',
  styleUrls: ['./produto-produtor.component.css']
})
export class ProdutoProdutorComponent implements OnInit {

  constructor(
    //aqui add o router
    private router: Router
  ) { }

  ngOnInit() {
    // Assim q a pag carregar barra de nav começar no inicio
    
  }

}
