import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { HttpClient, HttpRequest, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs'
import { AppConstants } from 'src/app/AppConstants';
import { NovoPerfil } from 'src/app/models/administracao/novoPerfil.model';


@Injectable()

export class PerfilService{

  constructor(
    private http: HttpClient,
    private router: Router
    ){}

  public deletePerfil(id: number){
    return this.http.delete(AppConstants.baseSystemProfiles + `/${id}`);
  }
  
  public deletePerfilByUser(id: number){
    return this.http.delete(AppConstants.baseSystemProfiles + `/ByUser/${id}`);
  }


  public getPerfilsById(id: number): Observable<NovoPerfil>{
    return this.http.get<NovoPerfil>(AppConstants.baseSystemProfiles + `/${id}`);
  }


  public getPerfil(){
    return this.http.get(AppConstants.baseSystemProfiles);
  }


  public savePerfil(perfilUsuario: NovoPerfil) {
    let token = localStorage.getItem("tokenSessao");
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Bearer ${token}`
    })
    let options = {
      headers,
    }
    return this.http.post(AppConstants.baseSystemProfiles, perfilUsuario, options);
  }


  public savePerfilByUser(perfilUsuario: any) {
    let token = localStorage.getItem("tokenSessao");
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Bearer ${token}`
    })
    let options = {
      headers,
    }
    return this.http.post(AppConstants.baseSystemProfileUsers, perfilUsuario, options);
  }


  public putPerfil(perfilUsuario: NovoPerfil) {
    let token = localStorage.getItem("tokenSessao");
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Bearer ${token}`
    })
    let options = {
      headers,
    }
    return this.http.put(AppConstants.baseSystemProfiles, perfilUsuario, options);
  }
}
