import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  counter = new BehaviorSubject<number>(0);
  url:any = 'https://mocki.io/v1/5a052eb1-bf45-4010-b6fb-9f7c8b7ac0af'

  constructor(private http: HttpClient) { }

  apiFetch(): Observable<any>{
    return this.http.get(this.url)
  }
}
