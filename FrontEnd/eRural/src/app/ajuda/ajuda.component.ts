import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-ajuda',
  templateUrl: './ajuda.component.html',
  styleUrls: ['./ajuda.component.css']
})
export class AjudaComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }


  ngOnInit() {
    if (environment.token == '') {
      alert('Sua seção expirou, faça o login novamente')
      this.router.navigate(['/inicio'])
      window.scroll(0, 0)
    }
  }
}
