import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class SPersonaService {

  perURL = 'https://bkd-test.onrender.com/personas/'
  pperURL = 'http://localhost:8080/personas/'
  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Persona[]> {
    return this.httpClient.get<Persona[]>(this.perURL + 'lista');
  }

  public detail(id: number): Observable<Persona> {
    return this.httpClient.get<Persona>(this.perURL + `detail/${id}`);
  }

  /*public save(persona: Persona): Observable<any> {
    return this.httpClient.post<any>(this.expURL + 'create', persona);
  }*/

  public update(id: number, persona: Persona): Observable<any> {
    return this.httpClient.put<any>(this.perURL + `update/${id}`, persona);
  }

  /*public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.expURL + `delete/${id}`);
  }*/
}