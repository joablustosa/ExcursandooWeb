import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { HttpClient, HttpRequest, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs'
import { AppConstants } from 'src/app/AppConstants';
import { MoneyOutputType } from 'src/app/shared/money-models/money-output.model';


@Injectable()

export class OutputTypeService{

  constructor(
    private http: HttpClient,
    private router: Router
    ){}

  public deleteOutput(id: number){
    return this.http.delete(AppConstants.baseOutputTypes + `/${id}`);
  }

  public getOutput(id: number){
    return this.http.get(AppConstants.baseOutputTypes + `/${id}`);
  }


  public getAllOutputType(){
    return this.http.get(AppConstants.baseOutputTypes);
  }

  public saveOutput(moneyOutput: MoneyOutputType) {
    
    let token = localStorage.getItem("tokenSessao");
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Bearer ${token}`
    })
    let options = {
      headers,
    }
    return this.http.post(AppConstants.baseOutputTypes, JSON.stringify(moneyOutput), options);
  }


  public putOutput(moneyOutput: MoneyOutputType) {
    let token = localStorage.getItem("tokenSessao");
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Bearer ${token}`
    })
    let options = {
      headers,
    }
    return this.http.put(AppConstants.baseOutputTypes, moneyOutput, options);
  }
}
