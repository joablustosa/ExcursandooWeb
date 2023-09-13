import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { HttpClient, HttpRequest, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs'
import { AppConstants } from 'src/app/AppConstants';
import { PerfilPagina, Permissao } from 'src/app/models/administracao/permissao.model';


@Injectable()

export class PermissaoService{

  constructor(
    private http: HttpClient,
    private router: Router
    ){}

  public deletePermissao(permissao: any){
    return this.http.delete(AppConstants.basePermissao + `/User/${permissao.id}`);
  }


  public getPermissaosById(id: number): Observable<Permissao>{
    return this.http.get<Permissao>(AppConstants.basePermissao + `/${id}`);
  }

  public getPermissaoByUser(id: number): Observable<Permissao>{
    let token = localStorage.getItem("tokenSessao");
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Bearer ${token}`
    })
    let options = {
      headers,
    }
    return this.http.get<Permissao>(AppConstants.baseSystemPages + `/ByUser/${id}`, options);
  }

  public getPermissaoByPerfil(id: number): Observable<PerfilPagina>{
    let token = localStorage.getItem("tokenSessao");
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Bearer ${token}`
    })
    let options = {
      headers,
    }
    return this.http.get<PerfilPagina>(AppConstants.baseSystemPages + `/PagesByIdProfiles/${id}`, options);
  }

  public getPermissao(){
    return this.http.get(AppConstants.basePermissao);
  }


  public savePermissao(permissao: Permissao) {
    let token = localStorage.getItem("tokenSessao");
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Bearer ${token}`
    })
    let options = {
      headers,
    }
    return this.http.post(AppConstants.baseSystemPages, permissao, options);
  }


  public savePerfil(permissao: Permissao) {
    let token = localStorage.getItem("tokenSessao");
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Bearer ${token}`
    })
    let options = {
      headers,
    }
    return this.http.post(AppConstants.basePermissao, permissao, options);
  }


  public putPermissao(permissao: Permissao) {
    let token = localStorage.getItem("tokenSessao");
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Bearer ${token}`
    })
    let options = {
      headers,
    }
    return this.http.put(AppConstants.basePermissao, permissao, options);
  }
}
