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

  serverPort = environment.server + environment.port

  constructor( private http:HttpClient ) {}

  cadastro( user:Usuario):Observable<Usuario>{
    return this.http.post<Usuario>('http://localhost:8080/usuarios/cadastrar',user)
  }

  entrar(userLogin:UserLogin): Observable<UserLogin>{
      return this.http.post<UserLogin>('http://localhost:8080/usuarios/logar', userLogin)
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

}
