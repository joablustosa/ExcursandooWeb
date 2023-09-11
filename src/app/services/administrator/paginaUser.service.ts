import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { HttpClient, HttpRequest, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs'
import { AppConstants } from 'src/app/AppConstants';
import { Menu } from 'src/app/shared/administracao/menu.model';


@Injectable()

export class PageUserService{

  constructor(
    private http: HttpClient,
    private router: Router
    ){}

  public deletePageUser(id: number){
    return this.http.delete(AppConstants.baseSystemPageUsers + `/${id}`);
  }

  public savePageUser(pageUser: Menu) {
    let token = localStorage.getItem("tokenSessao");
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Bearer ${token}`
    })//
    let options = {
      headers,
    }
    return this.http.post(AppConstants.baseSystemPageUsers, pageUser, options);
  }
}
