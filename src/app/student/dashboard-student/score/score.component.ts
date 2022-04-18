import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  index: string;
  finalTest: number;
  period: number;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H',index: 'A',finalTest: 80, period: 2},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He',index: 'A',finalTest: 80, period: 2,},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li',index: 'A',finalTest: 80, period: 2},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be',index: 'A',finalTest: 80, period: 2},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B',index: 'A',finalTest: 80, period: 2},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C',index: 'A',finalTest: 80, period: 2},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N',index: 'A',finalTest: 80, period: 2},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O',index: 'A',finalTest: 80, period: 2},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F',index: 'A',finalTest: 80, period: 2},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne',index: 'A',finalTest: 80, period: 2},
];

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})

export class ScoreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  panelOpenState = false;
  panelAktif = true

  displayedColumns: string[] = ['position', 'name', 'period', 'weight', 'symbol','finalTest','index'];
  dataSource = ELEMENT_DATA;

}
