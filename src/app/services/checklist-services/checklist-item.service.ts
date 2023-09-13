import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { HttpClient, HttpRequest, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs'
import { AppConstants } from 'src/app/AppConstants';
import { ChecklistItemModel } from 'src/app/models/checklist-models/checklist-item.model';

@Injectable()

export class ChecklistItemService{

  constructor(
    private http: HttpClient,
    private router: Router
    ){}

  public deleteChecklistItem(id: number){
    return this.http.delete(AppConstants.baseChecklistItems + `/${id}`);
  }

  public getChecklistItem(id: number){
    return this.http.get(AppConstants.baseChecklistItems + `/${id}`);
  }

  public getByTrip(id: number){
    return this.http.get(AppConstants.baseChecklistItems+`/ByTrip/${id}`);
  }


  public getAllChecklistItem(){
    return this.http.get(AppConstants.baseChecklistItems);
  }

  public saveChecklistItem(checklistItem: ChecklistItemModel) {
    
    let token = localStorage.getItem("tokenSessao");
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Bearer ${token}`
    })
    let options = {
      headers,
    }
    return this.http.post(AppConstants.baseChecklistItems, JSON.stringify(checklistItem), options);
  }


  public putChecklistItem(checklistItem: ChecklistItemModel) {
    let token = localStorage.getItem("tokenSessao");
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Bearer ${token}`
    })
    let options = {
      headers,
    }
    return this.http.put(AppConstants.baseChecklistItems, checklistItem, options);
  }
}
