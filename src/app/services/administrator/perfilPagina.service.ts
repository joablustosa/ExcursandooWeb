import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { HttpClient, HttpRequest, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs'
import { AppConstants } from 'src/app/AppConstants';
import { PerfilPagina } from 'src/app/models/administracao/novoPerfil.model';


@Injectable()

export class PerfilPaginaService{

  constructor(
    private http: HttpClient,
    private router: Router
    ){}

  public deletePerfil(id: number){
    return this.http.delete(AppConstants.baseSystemPageProfiles + `/${id}`);
  }


  public getPerfilsById(id: number): Observable<PerfilPagina>{
    return this.http.get<PerfilPagina>(AppConstants.baseSystemPageProfiles + `/${id}`);
  }


  public getPerfil(){
    return this.http.get(AppConstants.baseSystemPageProfiles);
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
    return this.http.post(AppConstants.baseSystemPageProfiles, perfilPagina, options);
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
    return this.http.put(AppConstants.baseSystemPageProfiles, perfilPagina, options);
  }
}
