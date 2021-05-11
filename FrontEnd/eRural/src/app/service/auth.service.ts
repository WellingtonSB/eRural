import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
<<<<<<< HEAD
=======
import { Observable } from 'rxjs';
import { Usuario } from '../model/Usuario';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from '../model/UserLogin';

>>>>>>> 71770f3a7da5be0c7819b93285a33191896271ae

@Injectable({
  providedIn: 'root'
})
export class AuthService {

<<<<<<< HEAD
  constructor(
    private Http:HttpClient
  ) { }
=======
  serverPort = environment.server + environment.port

  constructor( private http:HttpClient ) {}

  cadastro( user:Usuario):Observable<Usuario>{
    return this.http.post<Usuario>('http://localhost:8080/usuarios/cadastrar',user)
  }

  entrar(userLogin:UserLogin): Observable<UserLogin>{
      return this.http.post<UserLogin>('http://localhost:8080/usuarios/logar', userLogin)
    }

  



>>>>>>> 71770f3a7da5be0c7819b93285a33191896271ae
}
