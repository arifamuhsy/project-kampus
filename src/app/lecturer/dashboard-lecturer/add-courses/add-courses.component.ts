import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

import { AddData } from '../../add-data';
export interface allCourse {
  subjectID: number;
  subjectName: string;
  day: string;
  timeTable: string;
  collegeCredits: string;
}
const ELEMENT_DATA: allCourse[] = [
  {subjectID: 1, subjectName: 'Bahasa Inggris I', day: 'Wednesday', timeTable: '09.00',collegeCredits: '2'},
  {subjectID: 2, subjectName: 'Matematika Teknik', day: 'Monday', timeTable: '09.00',collegeCredits: '3',},
  {subjectID: 3, subjectName: 'Bahasa Inggris II', day: 'Friday', timeTable: '14.00',collegeCredits: '3'},
  {subjectID: 4, subjectName: 'Sistem Komputer', day: 'Wednesday', timeTable: '12.30',collegeCredits: '3'},
  {subjectID: 5, subjectName: 'Algoritma Pemrograman', day: 'Friday', timeTable: '09.00',collegeCredits: '4'},
  {subjectID: 6, subjectName: 'Fisika Dasar', day: 'Monday', timeTable: '12.30',collegeCredits: '4'},
  {subjectID: 7, subjectName: 'Elektronika Dasar', day: 'Tuesday', timeTable: '14.30',collegeCredits: '4'},
  {subjectID: 8, subjectName: 'Sistem Interface', day: 'Wednesday', timeTable: '15.30',collegeCredits: '3'},
  {subjectID: 9, subjectName: 'Sistem Mikrokontroller', day: 'Thrusday', timeTable: '09.00',collegeCredits: '4'},
  {subjectID: 10, subjectName: 'Pemrograman Shell', day: 'Thrusday', timeTable: '13.30',collegeCredits: '3'},
];

@Component({
  selector: 'app-add-courses',
  templateUrl: './add-courses.component.html',
  styleUrls: ['./add-courses.component.css']
})
export class AddCoursesComponent implements OnInit {

  displayedColumns: string[] = ['subjectID','subjectName', 'day', 'timeTable','collegeCredits'];
  dataSource = ELEMENT_DATA;

  data: AddData[] = [ { studentID: new Text(), subjectID: new Text() } ];
      dataSource1 = new BehaviorSubject<AbstractControl[]>([]);
      displayColumns = ['studentID', 'subjectID'];
      rows: FormArray = this.fb.array([]);
      form: FormGroup = this.fb.group({ 'texts': this.rows });

  constructor(private fb: FormBuilder) { }

      ngOnInit() {
        this.data.forEach((d: AddData) => this.addRow(d, false));
        this.updateView();
      }

      emptyTable() {
        while (this.rows.length !== 0) {
          this.rows.removeAt(0);
        }
      }

      addRow(d?: AddData, noUpdate?: boolean) {
        const row = this.fb.group({
          'studentID'   : [d && d.studentID ? d.studentID : null, []],
          'subjectID'     : [d && d.subjectID   ? d.subjectID   : null, []]
        });
        this.rows.push(row);
        if (!noUpdate) { this.updateView(); }
      }

      updateView() {
        this.dataSource1.next(this.rows.controls);
      }

}
