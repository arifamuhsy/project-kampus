import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Score } from '../model/score.model';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  constructor(private httpClient: HttpClient) { }
  baseUrl: string = 'http://localhost:8080/api/v1';
  studentID?: number

  getAllScore(): Observable<Score[]>{
    return this.httpClient.get<Score[]>(`${this.baseUrl+"/studentScore/"+1}`);
  }
  
  // getstudentID(getstudentID?:number){
  //   this.studentID=getstudentID;
  // }

  // getAllScoreById(): Observable<Object>{
  //   return this.httpClient.get<Object>(`${this.baseUrl+"/studentScore/"}/${this.studentID}`);
  // }
  getAllScoreById(): Observable<Score[]>{
    return this.httpClient.get<Score[]>(`${this.baseUrl+"/studentScore/1"}`);
  }
}
