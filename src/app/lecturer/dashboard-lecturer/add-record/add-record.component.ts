import { Component, OnInit } from '@angular/core';


export interface PeriodicElement {
  subjectID: number;
  subjectName: string;
  studentID: number;
  studentName: string;
  quiz: number;
  midTest: number;
  grade: string;
  finalTest: number;
  period: number;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {subjectID: 1, subjectName: 'Bahasa Inggris I',studentID: 6702160072, studentName: 'Arifa', period: 1, quiz: 0, midTest:0,finalTest: 0,grade: ''},
  {subjectID: 2, subjectName: 'Matematika Teknik',studentID: 6702160073, studentName: 'Naufal', period: 1, quiz: 0, midTest: 0,finalTest: 0,grade: '',},
  {subjectID: 4, subjectName: 'Sistem Komputer',studentID: 6702160074, studentName: 'Rimba', period: 1, quiz: 0, midTest: 0,finalTest: 0,grade: ''},
  {subjectID: 5, subjectName: 'Algoritma Pemrograman',studentID: 6702160075, studentName: 'Indrajit', period: 0, quiz: 0, midTest: 0,finalTest: 0,grade: ''},
  {subjectID: 8, subjectName: 'Sistem Interface',studentID: 6702160076, studentName: 'Dinda', period: 1, quiz: 0, midTest: 0,finalTest: 0,grade: ''},
];

@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.css']
})
export class AddRecordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  panelOpenState = false;
  panelAktif = true

  displayedColumns: string[] = ['subjectID', 'subjectName','studentID','studentName', 'period', 'quiz', 'midTest','finalTest','grade'];
  dataSource = ELEMENT_DATA;

}
