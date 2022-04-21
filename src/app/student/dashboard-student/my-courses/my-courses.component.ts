import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  subjectName: string;
  subjectID: number;
  quiz: number;
  midTest: number;
  grade: string;
  finalTest: number;
  period: number;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {subjectID: 1, subjectName: 'Bahasa Inggris I', period: 1, quiz: 60, midTest:80,finalTest: 80,grade: 'A'},
  {subjectID: 2, subjectName: 'Matematika Teknik', period: 1, quiz: 55, midTest: 60,finalTest: 80,grade: 'C',},
  {subjectID: 4, subjectName: 'Sistem Komputer', period: 1, quiz: 70, midTest: 75,finalTest: 80,grade: 'B'},
  {subjectID: 5, subjectName: 'Algoritma Pemrograman', period: 1, quiz: 75, midTest: 77,finalTest: 80,grade: 'A'},
  {subjectID: 8, subjectName: 'Sistem Interface', period: 1, quiz: 100, midTest: 90,finalTest: 80,grade: 'A'},
];

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css']
})
export class MyCoursesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  panelOpenState = false;
  panelAktif = true

  displayedColumns: string[] = ['subjectID', 'subjectName', 'period', 'quiz', 'midTest','finalTest','grade'];
  dataSource = ELEMENT_DATA;

}
