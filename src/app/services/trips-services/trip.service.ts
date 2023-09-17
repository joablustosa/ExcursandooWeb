import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { HttpClient, HttpRequest, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs'
import { AppConstants } from 'src/app/AppConstants';
import { TripModel } from 'src/app/models/trips-models/trips/trip.model';

@Injectable()

export class TripService{

  constructor(
    private http: HttpClient,
    private router: Router
    ){}

  public deleteTrip(id: number){
    return this.http.delete(AppConstants.baseTrips + `/${id}`);
  }

  public getTrip(id: number){
    return this.http.get(AppConstants.baseTrips + `/${id}`);
  }


  public getAllTrip(){
    return this.http.get(AppConstants.baseTrips);
  }


  public getTripsWithTreveler(){
    return this.http.get(AppConstants.baseTripsWithTreveler);
  }

  public saveTrip(moneyTrip: TripModel) {
    
    let token = localStorage.getItem("tokenSection");
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Bearer ${token}`
    })
    let options = {
      headers,
    }
    return this.http.post(AppConstants.baseTrips, JSON.stringify(moneyTrip), options);
  }


  public putTrip(moneyTrip: TripModel) {
    let token = localStorage.getItem("tokenSection");
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Bearer ${token}`
    })
    let options = {
      headers,
    }
    return this.http.put(AppConstants.baseTrips, moneyTrip, options);
  }
}
