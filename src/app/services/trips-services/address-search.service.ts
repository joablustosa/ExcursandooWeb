import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddressSearchService {
    private readonly apiUrl = 'https://viacep.com.br/ws/';

    constructor(private http: HttpClient) { }
  
    searchAddress(cep: string) {
      const url = `${this.apiUrl}${cep}/json/`;
      return this.http.get<any>(url);
    }
}