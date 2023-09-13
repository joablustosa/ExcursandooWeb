import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { HttpClient, HttpRequest, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs'
import { AppConstants } from 'src/app/AppConstants';
import { MessageModel } from 'src/app/models/message-models/message.model';


@Injectable()

export class MessageService{

  constructor(
    private http: HttpClient,
    private router: Router
    ){}

  public deleteMessage(id: number){
    return this.http.delete(AppConstants.baseMessages + `/${id}`);
  }

  public getMessage(id: number){
    return this.http.get(AppConstants.baseMessages + `/${id}`);
  }


  public getAllMessage(){
    return this.http.get(AppConstants.baseMessages);
  }

  public saveMessage(message: MessageModel) {
    
    let token = localStorage.getItem("tokenSessao");
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Bearer ${token}`
    })
    let options = {
      headers,
    }
    return this.http.post(AppConstants.baseMessages, JSON.stringify(message), options);
  }


  public putMessage(message: MessageModel) {
    let token = localStorage.getItem("tokenSessao");
    let headers = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization': `Bearer ${token}`
    })
    let options = {
      headers,
    }
    return this.http.put(AppConstants.baseMessages, message, options);
  }
}
