import { AlertasService } from './../service/alertas.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  usuario: Usuario = new Usuario
  confirmarSenha: string
  tipo: string

  token = localStorage.getItem('token')
  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router,
    private alertas: AlertasService
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
  }

  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value
  }

  tipoUser(event: any) {
    this.tipo = event.target.value
  }

  cadastrar() {
    this.usuario.tipoUsuario = this.tipo

    if (this.usuario.senha != this.confirmarSenha) {
      alert('A senhas deveem ser iguais!! ')
    } else {
      this.authService.cadastro(this.usuario).subscribe((resp: Usuario) => {
        this.usuario = resp
        this.router.navigate(['/login'])
        this.alertas.showAlertSuccess('Usuário cadastrado com sucesso!')
      }, erro => {
        if (erro.status == 500) {
          this.alertas.showAlertDanger('Email invalido!')
        }
        if(erro.status == 400){
          this.alertas.showAlertDanger('Email já cadastrado')
        }
      })
    }
  }



}
