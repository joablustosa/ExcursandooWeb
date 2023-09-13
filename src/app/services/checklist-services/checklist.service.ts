import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { HttpClient, HttpRequest, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs'
import { AppConstants } from 'src/app/AppConstants';
import { ChecklistModel } from 'src/app/models/checklist-models/checklist.model';


@Injectable()

export class ChecklistService{

  constructor(
    private http: HttpClient,
    private router: Router
    ){}

  public deleteChecklist(id: number){
    return this.http.delete(AppConstants.baseChecklist + `/${id}`);
  }

  public getChecklist(id: number){
    return this.http.get(AppConstants.baseChecklist + `/${id}`);
  }


  public getAllChecklist(){
    return this.http.get(AppConstants.baseChecklist);
  }

  public saveChecklist(checklist: ChecklistModel) {
    
    let token = localStorage.getItem("tokenSessao");
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Bearer ${token}`
    })
    let options = {
      headers,
    }
    return this.http.post(AppConstants.baseChecklist, JSON.stringify(checklist), options);
  }


  public putChecklist(checklist: ChecklistModel) {
    let token = localStorage.getItem("tokenSessao");
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Bearer ${token}`
    })
    let options = {
      headers,
    }
    return this.http.put(AppConstants.baseChecklist, checklist, options);
  }
}
