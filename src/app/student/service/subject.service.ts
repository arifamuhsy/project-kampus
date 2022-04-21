import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { AllSubject } from '../model/all-subject';
import { Subject } from '../model/subject.model';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private httpClient: HttpClient) { }
  baseUrl: string = 'http://localhost:8080';

  getAllSubject(): Observable<Subject[]>{
    return this.httpClient.get<Subject[]>(`${this.baseUrl+"/subjects"}`);
  }
}
