import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { HttpClient, HttpRequest, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs'
import { AppConstants } from 'src/app/AppConstants';
import { TripChecklistModel } from 'src/app/shared/trips-models/checklist/trip-checklist.model';

@Injectable()

export class TripChecklistService{

  constructor(
    private http: HttpClient,
    private router: Router
    ){}

  public deleteTripChecklist(id: number){
    return this.http.delete(AppConstants.baseTrips + `/${id}`);
  }

  public getTripChecklist(id: number){
    return this.http.get(AppConstants.baseTrips + `/${id}`);
  }


  public getAllTripChecklist(){
    return this.http.get(AppConstants.baseTrips);
  }

  public saveTripChecklist(moneyTripChecklist: TripChecklistModel) {
    
    let token = localStorage.getItem("tokenSessao");
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Bearer ${token}`
    })
    let options = {
      headers,
    }
    return this.http.post(AppConstants.baseTrips, JSON.stringify(moneyTripChecklist), options);
  }


  public putTripChecklist(moneyTripChecklist: TripChecklistModel) {
    let token = localStorage.getItem("tokenSessao");
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Bearer ${token}`
    })
    let options = {
      headers,
    }
    return this.http.put(AppConstants.baseTrips, moneyTripChecklist, options);
  }
}
