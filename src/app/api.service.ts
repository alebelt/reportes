import { Injectable } from '@angular/core';
import { Expediente } from './expediente';
import {HttpClient} from "@angular/common/http";
import { environment } from 'src/environments/environment';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }
 
  getExpedientes(): Observable<Expediente[]>{
    return this.httpClient.get<Expediente[]>(`${environment.baseURL}expedientes.json`);
  }
}

