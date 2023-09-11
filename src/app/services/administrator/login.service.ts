import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { JwtHelperService } from '@auth0/angular-jwt';
import { NgxSpinnerService } from 'ngx-spinner';
import { AppConstants } from 'src/app/AppConstants';
import { UserAud } from 'src/app/shared/administracao/menu.model';
import { UsuarioApi } from 'src/app/shared/administracao/usuarioApi.model';
import { Console } from 'console';

@Injectable()

export class LoginService{

  jwtHelper = new JwtHelperService();
  decodedToken: any;
  userAudFormula = new UserAud();

  constructor(
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService
    ){}


   public async efetivaLogin(usuarioApi: UsuarioApi){
    this.spinner.show();
    let headers = new HttpHeaders({
      "accept" : "text/plain",
      "Content-Type":"application/json",
    })
    let options = {
      headers,
    }
    return this.http.post(AppConstants.baseLogin, usuarioApi, options).toPromise().then(data => {
        var token = JSON.parse(JSON.stringify(data)).accessToken;
          if(token != null && token != undefined && token != ""){
            this.router.navigate(["inicio"]);
            localStorage.setItem('tokenSessao', token);
            localStorage.setItem('usuarioSessao', JSON.parse(this.jwtHelper.decodeToken(token).aud[0]!).Id!);
            // this.router.navigate([`inicio`]);
            this.http.get(AppConstants.baseLogin + `/BuscaMenu/${JSON.parse(this.jwtHelper.decodeToken(token).aud[0]!).Id!}`, options).subscribe(
              menu => {
                var userAud = JSON.stringify(menu);
                localStorage.setItem('userAud', userAud);
                if(usuarioApi.chaveDeAcesso == 'gb3000'){
                  this.router.navigate(["resetarSenha"]);
                }else{
                  this.router.navigate([`inicio`]);
                }
                this.toastr.success('Bem vindo ao Doo!');
                this.spinner.hide();
              },
            error => {
              this.toastr.warning(error);
              this.spinner.hide();
            });
          }else{
            this.router.navigate([""]);
            this.spinner.hide();
          }
        },
        error => {
          this.toastr.warning(error);
        }
      );
  }
  
  public async efetivaLoginAlteraSenha(usuarioApi: UsuarioApi){
    this.spinner.show();
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
    })
    let options = {
      headers,
    }
    let mensagem: string = ''
    return this.http.post(AppConstants.baseLogin, usuarioApi, options).subscribe(data => {
      var token = JSON.parse(JSON.stringify(data)).accessToken;
        if(token != null){
          localStorage.setItem('tokenSessao', token);
          this.decodedToken = this.jwtHelper.decodeToken(token)
          var usuarioSessao = this.decodedToken.unique_name[0]
          var userAud = JSON.stringify(JSON.parse(this.decodedToken.aud[0]).Menus);
          localStorage.setItem('usuarioSessao', usuarioSessao);
          localStorage.setItem('userAud', userAud);
          this.spinner.hide();
        }else{
          this.router.navigate(["inicio"]);
          mensagem = 'Seu usuário e senha podem está incorretos'
          this.toastr.warning(mensagem);
          this.spinner.hide();
        }
      },
      error => {
        this.toastr.warning("Erro ao fazer login");
      }
    )
  }

  logado(){
    const token = localStorage.getItem('tokenSessao');
    if(token != null || token != undefined){
      this.toastr.success('Você já estava logado, Bem vindo!');
      return this.jwtHelper.isTokenExpired(token!);
    }else{
      this.toastr.warning('Sua sessão expirou!');
      return this.jwtHelper.isTokenExpired(token!);
    }
  }

  logoutUsuario(){
    localStorage.removeItem('tokenSessao');
    localStorage.removeItem("usuarioSessao");
    localStorage.removeItem("userAud");
    this.router.navigate(['login']);
    this.spinner.hide();
  }

  
  sairUsuario(){
    localStorage.removeItem('tokenSessao');
    localStorage.removeItem("usuarioSessao");
    localStorage.removeItem("userAud");
    this.router.navigate(['login']);
    this.spinner.hide();
  }

  
  buscaIdUsuarioLogado(){
    localStorage.getItem('usuarioSessao');
  }
}
