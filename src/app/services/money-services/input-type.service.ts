import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { HttpClient, HttpRequest, HttpHeaders} from '@angular/common/http';
import { AppConstants } from 'src/app/AppConstants';
import { MoneyInputModel } from 'src/app/shared/money-models/money-input.model';


@Injectable()

export class InputTypeService{

  constructor(
    private http: HttpClient,
    private router: Router
    ){}

  public deleteInput(id: number){
    return this.http.delete(AppConstants.baseInputTypes + `/${id}`);
  }

  public getInput(id: number){
    return this.http.get(AppConstants.baseInputTypes + `/${id}`);
  }


  public getAllInputType(){
    return this.http.get(AppConstants.baseInputTypes);
  }


  public getByTrip(idExcurseiro: number, idTrip: number){
    return this.http.get(AppConstants.baseTripComponents + `?idExcurseiro=${idExcurseiro}&idTrip=${idTrip}`);
  }

  public saveInput(moneyInput: MoneyInputModel) {
    
    let token = localStorage.getItem("tokenSessao");
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Bearer ${token}`
    })
    let options = {
      headers,
    }
    return this.http.post(AppConstants.baseInputTypes, JSON.stringify(moneyInput), options);
  }


  public putInput(moneyInput: MoneyInputModel) {
    let token = localStorage.getItem("tokenSessao");
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Bearer ${token}`
    })
    let options = {
      headers,
    }
    return this.http.put(AppConstants.baseInputTypes, moneyInput, options);
  }
}
