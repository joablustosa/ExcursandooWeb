import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { HttpClient, HttpRequest, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs'
import { AppConstants } from 'src/app/AppConstants';
import { SubInputType } from 'src/app/models/money-models/money-sub-input-type.model';

@Injectable()

export class SubInputTypeService{

  constructor(
    private http: HttpClient,
    private router: Router
    ){}

  public deleteTripInput(id: number){
    return this.http.delete(AppConstants.baseTrips + `/${id}`);
  }

  public getTripInput(id: number){
    return this.http.get(AppConstants.baseTrips + `/${id}`);
  }


  public getAllSubInputType(){
    return this.http.get(AppConstants.baseSubInputTypes);
  }

  public saveTripInput(moneyTripInput: SubInputType) {
    
    let token = localStorage.getItem("tokenSessao");
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Bearer ${token}`
    })
    let options = {
      headers,
    }
    return this.http.post(AppConstants.baseTrips, JSON.stringify(moneyTripInput), options);
  }


  public putTripInput(moneyTripInput: SubInputType) {
    let token = localStorage.getItem("tokenSessao");
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Bearer ${token}`
    })
    let options = {
      headers,
    }
    return this.http.put(AppConstants.baseTrips, moneyTripInput, options);
  }
}
