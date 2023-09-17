import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { HttpClient, HttpRequest, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs'
import { AppConstants } from 'src/app/AppConstants';
import { BoardingPointModel } from 'src/app/models/trips-models/boarding_point/boarding_points.model';
import { TripBoardingPoint } from 'src/app/models/trips-models/trips/trip.model';

@Injectable()

export class BoardingPointService{

  constructor(
    private http: HttpClient,
    private router: Router
    ){}

  public deleteComponent(id: number){
    return this.http.delete(AppConstants.baseTripComponents + `/${id}`);
  }

  public getComponent(id: number){
    return this.http.get(AppConstants.baseTripComponents + `/${id}`);
  }


  public getAllTripComponent(){
    return this.http.get(AppConstants.baseTripComponents);
  }


  public getAllComponents(){
    return this.http.get(AppConstants.baseComponents);
  }


  public getByTrip(idExcurseiro: number, idTrip: number){
    return this.http.get(AppConstants.baseTripComponents + `/TripComponentFromList?idExcurseiro=${idExcurseiro}&idTrip=${idTrip}`);
  }

  public saveComponent(boardingPoint: BoardingPointModel) {
    
    let token = localStorage.getItem("tokenSessao");
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Bearer ${token}`
    })
    let options = {
      headers,
    }
    return this.http.post(AppConstants.baseTripComponents, JSON.stringify(boardingPoint), options);
  }

  public postList(boardingPoint: TripBoardingPoint[]) {
    
    let token = localStorage.getItem("tokenSessao");
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Bearer ${token}`
    })
    let options = {
      headers,
    }
    return this.http.post(AppConstants.baseTripBoardingPoints + '/PostList', JSON.stringify(boardingPoint), options);
  }

  public saveTripComponent(boardingPoint: BoardingPointModel) {
    
    let token = localStorage.getItem("tokenSessao");
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Bearer ${token}`
    })
    let options = {
      headers,
    }
    return this.http.post(AppConstants.baseTripComponents, JSON.stringify(boardingPoint), options);
  }


  public putComponent(boardingPoint: BoardingPointModel) {
    let token = localStorage.getItem("tokenSessao");
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Bearer ${token}`
    })
    let options = {
      headers,
    }
    return this.http.put(AppConstants.baseTripComponents, boardingPoint, options);
  }
}
