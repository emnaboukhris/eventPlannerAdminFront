import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs-compat';

@Injectable({
  providedIn: 'root'
})

 
export class EventService {
private apiUrl = "http://localhost:8080/"
  constructor(
private http : HttpClient ) { }

public getEvent():Observable<Event>{
  return this.http.get<any>(`${this.apiUrl}event`)
}

public updateEvent(event: Event):Observable<Event>{
  return this.http.put<Event>(`${this.apiUrl}event/1}`,event)
}

public addservices(event: Event):Observable<Event>{
  return this.http.post<Event>(`${this.apiUrl}event/1`,event)

}

public deleteservices(event: Event):Observable<Event>{
  return this.http.delete<Event>(`${this.apiUrl}event/1`)

}

}
