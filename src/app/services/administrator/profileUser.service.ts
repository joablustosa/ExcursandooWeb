import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { HttpClient, HttpRequest, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs'
import { AppConstants } from 'src/app/AppConstants';
import { PerfilPagina } from 'src/app/shared/administracao/permissao.model';


@Injectable()

export class ProfileUserService{

  constructor(
    private http: HttpClient,
    private router: Router
    ){}

  public deletePerfil(id: number){
    return this.http.delete(AppConstants.baseSystemProfileUsers + `/${id}`);
  }


  public getPerfilsById(id: number): Observable<PerfilPagina>{
    return this.http.get<PerfilPagina>(AppConstants.baseSystemProfileUsers + `/${id}`);
  }


  public getPerfil(){
    return this.http.get(AppConstants.baseSystemProfileUsers);
  }

  public getPerfilByUser(id: number){
    return this.http.get(AppConstants.baseSystemProfiles + `/ByUser/${id}`);
  }


  public savePerfil(perfilPagina: any) {
    let token = localStorage.getItem("tokenSessao");
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Bearer ${token}`
    })
    let options = {
      headers,
    }
    return this.http.post(AppConstants.baseSystemProfileUsers, perfilPagina, options);
  }


  public putPerfil(perfilPagina: PerfilPagina) {
    let token = localStorage.getItem("tokenSessao");
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Bearer ${token}`
    })
    let options = {
      headers,
    }
    return this.http.put(AppConstants.baseSystemProfileUsers, perfilPagina, options);
  }
}
