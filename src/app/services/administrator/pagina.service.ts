import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { HttpClient, HttpRequest, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs'
import { AppConstants } from 'src/app/AppConstants';
import { Menu } from 'src/app/models/administracao/menu.model';


@Injectable()

export class PaginaService{

  constructor(
    private http: HttpClient,
    private router: Router
    ){}

  public deleteMenu(id: number){
    return this.http.delete(AppConstants.basePaginas + `/${id}`);
  }


  public getConfiguracoesById(id: number): Observable<Menu>{
    return this.http.get<Menu>(AppConstants.basePaginas + `/${id}`);
  }


  public getMenu(id: number){
    return this.http.get(AppConstants.basePaginas + `/${id}`);
  }


  public getPagina(){
    return this.http.get(AppConstants.basePaginas);
  }

  public saveMenu(configuracao: Menu) {
    
    let token = localStorage.getItem("tokenSessao");
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Bearer ${token}`
    })
    let options = {
      headers,
    }
    return this.http.post(AppConstants.basePaginas, JSON.stringify(configuracao), options);
  }


  public putMenu(configuracao: Menu) {
    let token = localStorage.getItem("tokenSessao");
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Bearer ${token}`
    })
    let options = {
      headers,
    }
    return this.http.put(AppConstants.basePaginas, configuracao, options);
  }
}
