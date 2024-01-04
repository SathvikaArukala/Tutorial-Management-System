
import { Injectable } from '@angular/core';
import { Tutorial } from './tutorial';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  private baseURL = "http://localhost:8080/tutorial.com";

  constructor(private httpClient: HttpClient) { }

  getTutorialList(): Observable<Tutorial[]>{
    return this.httpClient.get<Tutorial[]>(`${this.baseURL}/readAllTutorials`);
  }

  addTutorial(tutorial:Tutorial):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/addTutorial`,tutorial)
  }

  getTutorialById(id: number): Observable<Tutorial>{
    return this.httpClient.get<Tutorial>(`${this.baseURL}/readById/${id}`);
  }

  updateTutorial(id: number, tutorial: Tutorial): Observable<Object>{
    
    return this.httpClient.put(`${this.baseURL}/updateTutorial/${id}`, tutorial);
  }

  deleteTutorial(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/deleteTutorial/${id}`);
  }
}
