import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { HttpClient, HttpRequest, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs'
import { AppConstants } from 'src/app/AppConstants';
import { AccountModel } from 'src/app/shared/money-models/money-input.model';


@Injectable()

export class AccountService{

  constructor(
    private http: HttpClient,
    private router: Router
    ){}

  public deleteAccount(id: number){
    return this.http.delete(AppConstants.baseAccounts + `/${id}`);
  }

  public getAccount(id: number){
    return this.http.get(AppConstants.baseAccounts + `/${id}`);
  }


  public getAllAccount(){
    return this.http.get(AppConstants.baseAccounts);
  }


  public getAccountToTrip(idTrip: number){
    return this.http.get(AppConstants.baseAccounts+`/ByTrip/${idTrip}`);
  }

  public saveAccount(moneyAccount: AccountModel) {
    
    let token = localStorage.getItem("tokenSessao");
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Bearer ${token}`
    })
    let options = {
      headers,
    }
    return this.http.post(AppConstants.baseAccounts, JSON.stringify(moneyAccount), options);
  }


  public putAccount(moneyAccount: any) {
    let token = localStorage.getItem("tokenSessao");
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Bearer ${token}`
    })
    let options = {
      headers,
    }
    return this.http.put(AppConstants.baseAccounts, moneyAccount, options);
  }
}
