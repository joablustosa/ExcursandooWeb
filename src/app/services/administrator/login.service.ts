import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserAud } from 'src/app/models/administracao/menu.model';
import { UsuarioApi } from 'src/app/models/administracao/usuarioApi.model';
import { AppConstants } from 'src/app/AppConstants';
import { error } from 'console';

@Injectable()

export class LoginService {

  jwtHelper = new JwtHelperService();
  decodedToken: any;
  userAudFormula = new UserAud();

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }


  public async efetivaLogin(usuarioApi: UsuarioApi) {
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
    })

    let options = {
      headers,
    }

    return this.http.post(AppConstants.baseLogin, usuarioApi, options).subscribe(
      response => {
        var token = JSON.parse(JSON.stringify(response)).accessToken;
        if (token != null && token != undefined && token != "") {
          localStorage.setItem('tokenSection', token);
          localStorage.setItem('userSection', JSON.parse(this.jwtHelper.decodeToken(token).aud[0]!).Id!);
          this.router.navigate(["/dashboard"]);

          // this.http.get(AppConstants.baseLogin + `/BuscaMenu/${JSON.parse(this.jwtHelper.decodeToken(token).aud[0]!).Id!}`, options).subscribe(
          //   menu => {
          //     var userAud = JSON.stringify(menu);
          //     localStorage.setItem('userAud', userAud);
          //     this.router.navigate([`/dashboard`]);
          //   }, error => {
          //     console.log("teste");
          //   });

        } else {
          this.router.navigate(["/login"]);
        }
      }, error => {

      });
    }


  public async efetivaLoginAlteraSenha(usuarioApi: UsuarioApi) {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    })
    let options = {
      headers,
    }
    let mensagem: string = ''
    return this.http.post(AppConstants.baseLogin, usuarioApi, options).subscribe(data => {
      var token = JSON.parse(JSON.stringify(data)).accessToken;
      if (token != null) {
        localStorage.setItem('tokenSessao', token);
        this.decodedToken = this.jwtHelper.decodeToken(token)
        var usuarioSessao = this.decodedToken.unique_name[0]
        var userAud = JSON.stringify(JSON.parse(this.decodedToken.aud[0]).Menus);
        localStorage.setItem('usuarioSessao', usuarioSessao);
        localStorage.setItem('userAud', userAud);
      } else {
        this.router.navigate(["inicio"]);
        mensagem = 'Seu usuário e senha podem está incorretos'
      }
    },
      error => {

      }
    )
  }

  logado() {
    const token = localStorage.getItem('tokenSessao');
    if (token != null || token != undefined) {

      return this.jwtHelper.isTokenExpired(token!);
    } else {

      return this.jwtHelper.isTokenExpired(token!);
    }
  }

  logoutUsuario() {
    localStorage.removeItem('tokenSessao');
    localStorage.removeItem("usuarioSessao");
    localStorage.removeItem("userAud");
    this.router.navigate(['login']);
  }


  sairUsuario() {
    localStorage.removeItem('tokenSessao');
    localStorage.removeItem("usuarioSessao");
    localStorage.removeItem("userAud");
    this.router.navigate(['login']);
  }


  buscaIdUsuarioLogado() {
    localStorage.getItem('usuarioSessao');
  }
}
