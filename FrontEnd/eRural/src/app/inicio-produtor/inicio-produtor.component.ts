
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertasService } from '../service/alertas.service';

@Component({
  selector: 'app-inicio-produtor',
  templateUrl: './inicio-produtor.component.html',
  styleUrls: ['./inicio-produtor.component.css']
})
export class InicioProdutorComponent implements OnInit {

  token = localStorage.getItem('token')

  constructor(
    private router: Router,
    private alertas: AlertasService
  ) { }

  ngOnInit() {
    if (this.token == null) {
      this.alertas.showAlertDanger('Sua seção expirou, faça o login novamente')
      this.router.navigate(['/inicio'])
    }
    window.scroll(0, 0)
  }

}
