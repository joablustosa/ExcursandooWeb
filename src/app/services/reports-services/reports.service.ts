import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { HttpClient, HttpRequest, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs'
import { AppConstants } from 'src/app/AppConstants';


@Injectable()

export class OutputService{

  constructor(
    private http: HttpClient,
    private router: Router
    ){}

  public getReportInput(id: number){
    return this.http.get(AppConstants.baseOutputTypes + `/${id}`);
  }

  public getReportOutput(id: number){
    return this.http.get(AppConstants.baseOutputTypes + `/${id}`);
  }

  public getReportTrip(id: number){
    return this.http.get(AppConstants.baseOutputTypes + `/${id}`);
  }

}
