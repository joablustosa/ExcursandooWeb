import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { HttpClient, HttpRequest, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs'
import { AppConstants } from 'src/app/AppConstants';
import { TripRouteModel } from 'src/app/models/trips-models/routes/routes-model';

@Injectable()

export class TripRoutesService{

  constructor(
    private http: HttpClient,
    private router: Router
    ){}

  public deleteTripRoutes(id: number){
    return this.http.delete(AppConstants.baseBoardingPoints + `/${id}`);
  }

  public getTripRoutes(id: number){
    return this.http.get(AppConstants.baseBoardingPoints + `/${id}`);
  }

  public getByTrip(id: number){
    return this.http.get(AppConstants.baseTripBoardingPoints + `/TripBoardingPointByTrip/${id}`);
  }


  public getAllTripRoutes(){
    return this.http.get(AppConstants.baseBoardingPoints);
  }

  public saveTripRoutes(moneyTripRoutes: TripRouteModel) {
    
    let token = localStorage.getItem("tokenSessao");
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Bearer ${token}`
    })
    let options = {
      headers,
    }
    return this.http.post(AppConstants.baseBoardingPoints, JSON.stringify(moneyTripRoutes), options);
  }


  public putTripRoutes(moneyTripRoutes: TripRouteModel) {
    let token = localStorage.getItem("tokenSessao");
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Bearer ${token}`
    })
    let options = {
      headers,
    }
    return this.http.put(AppConstants.baseBoardingPoints, moneyTripRoutes, options);
  }
}
