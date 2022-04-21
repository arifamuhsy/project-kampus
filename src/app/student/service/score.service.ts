import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Score } from '../model/score.model';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  constructor(private httpClient: HttpClient) { }
  baseUrl: string = 'http://localhost:8080';

  getAllScore(): Observable<Score[]>{
    return this.httpClient.get<Score[]>(`${this.baseUrl+"/studentScore?studentID=1"}`);
  }
}
