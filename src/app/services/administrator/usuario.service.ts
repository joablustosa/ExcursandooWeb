import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { HttpClient, HttpRequest, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs'
import { AppConstants } from '../../AppConstants';
import { NovoUsuario } from '../../shared/novoUsuario.model';


@Injectable()

export class UsuarioService{

  constructor(
    private http: HttpClient,
    private router: Router
    ){}

  public deleteUsuario(id: number){
    return this.http.delete(AppConstants.baseNovoUsuario + `/${id}`);
  }


  public getUsuariosById(id: number): Observable<NovoUsuario>{
    return this.http.get<NovoUsuario>(AppConstants.baseNovoUsuario + `/${id}`);
  }


  public getUsuario(){
    return this.http.get(AppConstants.baseNovoUsuario);
  }


  public saveUsuario(classe: NovoUsuario) {
    let token = localStorage.getItem("tokenSessao");
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Bearer ${token}`
    })
    let options = {
      headers,
    }
    return this.http.post(AppConstants.baseNovoUsuario, classe, options);
  }


  public putUsuario(classe: NovoUsuario) {
    let token = localStorage.getItem("tokenSessao");
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Bearer ${token}`
    })
    let options = {
      headers,
    }
    return this.http.put(AppConstants.baseNovoUsuario, classe, options);
  }
}
