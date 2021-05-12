import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../model/Usuario';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from '../model/UserLogin';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http:HttpClient ) {}

  cadastro( user:Usuario):Observable<Usuario>{
    return this.http.post<Usuario>(`${environment.server}/usuarios/cadastrar`,user)
  }

  entrar(userLogin:UserLogin): Observable<UserLogin>{
      return this.http.post<UserLogin>(`${environment.server}/usuarios/logar`, userLogin)
    }

    getByIdUSer(id: number): Observable<Usuario>{
      return this.http.get<Usuario>(`http://localhost:8080/usuarios/${id}`)
    }

    logado(){
      let ok: boolean=false
      if(environment.token != ''){
        ok =true
      }
      return ok
    }

    produtor(){
      let ok: boolean =false
      if(environment.tipo == 'produtor'){
        ok =true
      }
      return ok
    }

    cliente(){
      let ok: boolean =false
      if(environment.tipo == 'cliente'){
        ok =true
      }
      return ok
    }

    administrador(){
      let ok: boolean =false
      if(environment.tipo == 'administrador'){
        ok =true
      }
      return ok
    }

}
