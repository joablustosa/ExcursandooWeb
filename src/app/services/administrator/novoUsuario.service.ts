import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { HttpClient, HttpRequest, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs'
import { AppConstants } from 'src/app/AppConstants';
import { NovoUsuario } from 'src/app/shared/administracao/novoUsuario.model';
import { Permissao } from 'src/app/shared/administracao/permissao.model';


@Injectable()

export class NovoUsuarioService{

  constructor(
    private http: HttpClient,
    private router: Router
    ){}

  public deleteNovoUsuario(id: number){
    return this.http.delete(AppConstants.baseNovoUsuario + `/${id}`);
  }


  public getNovoUsuariosById(id: number): Observable<NovoUsuario>{
    return this.http.get<NovoUsuario>(AppConstants.baseNovoUsuario + `/${id}`);
  }

  public getPermissaoByUser(id: number): Observable<Permissao>{
    return this.http.get<Permissao>(AppConstants.basePermissao + `/User/${id}`);
  }

  public getNovoUsuario(){
    return this.http.get(AppConstants.baseNovoUsuario);
  }


  public saveNovoUsuario(novoUsuario: NovoUsuario) {
    let token = localStorage.getItem("tokenSessao");
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Bearer ${token}`
    })
    let options = {
      headers,
    }
    // console.log(novoUsuario);
    // console.log(options);
    return this.http.post(AppConstants.baseNovoUsuario, novoUsuario, options);
  }

  public saveNovaSenha(novaSenha: any) {
    let token = localStorage.getItem("tokenSessao");
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Bearer ${token}`
    })
    let options = {
      headers,
    }
    // console.log(novoUsuario);
    // console.log(options);
    return this.http.post(AppConstants.baseLogin + "/ResetaSenha", novaSenha, options);
  }


  public putNovoUsuario(novoUsuario: NovoUsuario) {
    let token = localStorage.getItem("tokenSessao");
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Bearer ${token}`
    })
    let options = {
      headers,
    }
    //console.log(novoUsuario);
    return this.http.put(AppConstants.baseNovoUsuario, novoUsuario, options);
  }
}
