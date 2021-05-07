import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(
    private authService: AuthService,
    private router: Router
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
        alert('Usuário cadastrado com sucesso!')
      }, erro => {
        if (erro.status == 500) {
          alert('Email invalido!')
        }
        if(erro.status == 400){
          alert('Email já cadastrado')
        }
      })
    }
  }



}
