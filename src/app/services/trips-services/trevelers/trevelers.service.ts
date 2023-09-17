import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { HttpClient, HttpRequest, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs'
import { AppConstants } from 'src/app/AppConstants';
import { TrevelerModel } from 'src/app/models/trips-models/trevelers/trip-trevelers.model';

@Injectable()

export class TrevelersService{

  constructor(
    private http: HttpClient,
    private router: Router
    ){}

  public deleteTreveler(id: number){
    return this.http.delete(AppConstants.baseTrevelers + `/${id}`);
  }

  public getTreveler(id: number){
    return this.http.get(AppConstants.baseTrevelers + `/${id}`);
  }


  public getAllTreveler(){
    return this.http.get(AppConstants.baseTrevelers);
  }


  public getAllTrevelerByTrip(id: number){
    return this.http.get(AppConstants.baseTrevelers);
  }

  public getBy(id: number){
    return this.http.get(AppConstants.baseTrevelers + `/TrevelersBy?id=${id}`);
  }

  public saveTreveler(Treveler: TrevelerModel) {
    
    let token = localStorage.getItem("tokenSessao");
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Bearer ${token}`
    })
    let options = {
      headers,
    }
    return this.http.post(AppConstants.baseTrevelers, JSON.stringify(Treveler), options);
  }


  public putTreveler(tripTreveler: TrevelerModel) {
    let token = localStorage.getItem("tokenSessao");
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Bearer ${token}`
    })
    let options = {
      headers,
    }
    return this.http.put(AppConstants.baseTrevelers, tripTreveler, options);
  }
}
