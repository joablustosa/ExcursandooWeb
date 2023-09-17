import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { HttpClient, HttpRequest, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs'
import { AppConstants } from 'src/app/AppConstants';
import { PaymentMethod } from 'src/app/models/money-models/money-payment-method.model';


@Injectable()

export class PaymentMethodService{

  constructor(
    private http: HttpClient,
    private router: Router
    ){}

  public deletePaymentMethod(id: number){
    return this.http.delete(AppConstants.baseAccounts + `/${id}`);
  }

  public getPaymentMethod(id: number){
    return this.http.get(AppConstants.baseAccounts + `/${id}`);
  }


  public getAllPaymentMethod(){
    return this.http.get(AppConstants.baseAccounts);
  }


  public getByTrip(idExcurseiro: number, idTrip: number){
    return this.http.get(AppConstants.baseTripComponents + `?idExcurseiro=${idExcurseiro}&idTrip=${idTrip}`);
  }

  public postList(boardingPoint: PaymentMethod[]) {
    
    let token = localStorage.getItem("tokenSessao");
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Bearer ${token}`
    })
    let options = {
      headers,
    }
    return this.http.post(AppConstants.baseTripPaymentMethods + '/PostList', JSON.stringify(boardingPoint), options);
  }

  public savePaymentMethod(moneyPaymentMethod: PaymentMethod) {
    
    let token = localStorage.getItem("tokenSessao");
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Bearer ${token}`
    })
    let options = {
      headers,
    }
    return this.http.post(AppConstants.baseAccounts, JSON.stringify(moneyPaymentMethod), options);
  }


  public putPaymentMethod(moneyPaymentMethod: PaymentMethod) {
    let token = localStorage.getItem("tokenSessao");
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Bearer ${token}`
    })
    let options = {
      headers,
    }
    return this.http.put(AppConstants.baseAccounts, moneyPaymentMethod, options);
  }
}
