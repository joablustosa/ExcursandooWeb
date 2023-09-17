import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { HttpClient, HttpRequest, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs'
import { AppConstants } from 'src/app/AppConstants';
import { TripOutputModel } from 'src/app/models/trips-models/output/trip-output.model';

@Injectable()

export class TripOutputService{

  constructor(
    private http: HttpClient,
    private router: Router
    ){}

  public deleteTripOutput(id: number){
    return this.http.delete(AppConstants.baseTrips + `/${id}`);
  }

  public getTripOutput(id: number){
    return this.http.get(AppConstants.baseTrips + `/${id}`);
  }


  public getAllTripOutput(){
    return this.http.get(AppConstants.baseTrips);
  }

  public saveTripOutput(moneyTripOutput: TripOutputModel) {
    
    let token = localStorage.getItem("tokenSessao");
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Bearer ${token}`
    })
    let options = {
      headers,
    }
    return this.http.post(AppConstants.baseTrips, JSON.stringify(moneyTripOutput), options);
  }


  public putTripOutput(moneyTripOutput: TripOutputModel) {
    let token = localStorage.getItem("tokenSessao");
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Bearer ${token}`
    })
    let options = {
      headers,
    }
    return this.http.put(AppConstants.baseTrips, moneyTripOutput, options);
  }
}
