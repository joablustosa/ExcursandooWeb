import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { HttpClient, HttpRequest, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs'
import { AppConstants } from 'src/app/AppConstants';
import { TripSeatsModel } from 'src/app/models/trips-models/seats/trip-seats.model';

@Injectable()

export class TripSeatService{

  constructor(
    private http: HttpClient,
    private router: Router
    ){}

  public deleteTripSeat(id: number){
    return this.http.delete(AppConstants.baseTrips + `/${id}`);
  }

  public getTripSeat(id: number){
    return this.http.get(AppConstants.baseTrips + `/${id}`);
  }


  public getAllTripSeat(){
    return this.http.get(AppConstants.baseTrips);
  }

  public saveTripSeat(moneyTripSeat: TripSeatsModel) {
    
    let token = localStorage.getItem("tokenSessao");
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Bearer ${token}`
    })
    let options = {
      headers,
    }
    return this.http.post(AppConstants.baseTrips, JSON.stringify(moneyTripSeat), options);
  }


  public putTripSeat(moneyTripSeat: TripSeatsModel) {
    let token = localStorage.getItem("tokenSessao");
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Bearer ${token}`
    })
    let options = {
      headers,
    }
    return this.http.put(AppConstants.baseTrips, moneyTripSeat, options);
  }
}
