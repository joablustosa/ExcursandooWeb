import { Router } from '@angular/router'
import { HttpClient, HttpRequest, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs'
import { AppConstants } from 'src/app/AppConstants';
import { Injectable } from '@angular/core';
import { SubOutputType } from 'src/app/shared/money-models/money-sub-output-type.model';

@Injectable()

export class SubOutputTypeService{

  constructor(
    private http: HttpClient,
    private router: Router
    ){}

  public deleteTripOutput(id: number){
    return this.http.delete(AppConstants.baseSubOutputTypes + `/${id}`);
  }

  public getTripOutput(id: number){
    return this.http.get(AppConstants.baseSubOutputTypes + `/${id}`);
  }


  public getAllSubOutputType(){
    return this.http.get(AppConstants.baseSubOutputTypes);
  }

  public saveTripOutput(moneyTripOutput: SubOutputType) {
    
    let token = localStorage.getItem("tokenSessao");
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Bearer ${token}`
    })
    let options = {
      headers,
    }
    return this.http.post(AppConstants.baseSubOutputTypes, JSON.stringify(moneyTripOutput), options);
  }


  public putTripOutput(moneyTripOutput: SubOutputType) {
    let token = localStorage.getItem("tokenSessao");
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Bearer ${token}`
    })
    let options = {
      headers,
    }
    return this.http.put(AppConstants.baseSubOutputTypes, moneyTripOutput, options);
  }
}
