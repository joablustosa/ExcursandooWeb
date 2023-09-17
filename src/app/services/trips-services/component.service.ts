import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { HttpClient, HttpRequest, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs'
import { AppConstants } from 'src/app/AppConstants';
import { ComponentModel, TripComponentModel } from 'src/app/models/trips-models/trips/component.model';

@Injectable()

export class ComponentService{

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

  public saveComponent(component: ComponentModel) {
    
    let token = localStorage.getItem("tokenSessao");
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Bearer ${token}`
    })
    let options = {
      headers,
    }
    return this.http.post(AppConstants.baseTripComponents, JSON.stringify(component), options);
  }

  public postList(component: ComponentModel[]) {
    
    let token = localStorage.getItem("tokenSessao");
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Bearer ${token}`
    })
    let options = {
      headers,
    }
    return this.http.post(AppConstants.baseTripComponents + '/PostList', JSON.stringify(component), options);
  }

  public saveTripComponent(component: TripComponentModel) {
    
    let token = localStorage.getItem("tokenSessao");
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Bearer ${token}`
    })
    let options = {
      headers,
    }
    return this.http.post(AppConstants.baseTripComponents, JSON.stringify(component), options);
  }


  public putComponent(component: ComponentModel) {
    let token = localStorage.getItem("tokenSessao");
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Bearer ${token}`
    })
    let options = {
      headers,
    }
    return this.http.put(AppConstants.baseTripComponents, component, options);
  }
}
