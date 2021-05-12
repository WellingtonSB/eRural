import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-produtor',
  templateUrl: './inicio-produtor.component.html',
  styleUrls: ['./inicio-produtor.component.css']
})
export class InicioProdutorComponent implements OnInit {
  
  token = localStorage.getItem('token')

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    if (this.token == null) {
      alert('Sua seção expirou, faça o login novamente')
      this.router.navigate(['/inicio'])
    }
    window.scroll(0, 0)
  }

}
