import { Component, OnInit } from '@angular/core';
import { Score } from '../../model/score.model';
import { ScoreService } from '../../service/score.service';


@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})

export class ScoreComponent implements OnInit {

  constructor(private scoreService: ScoreService) { }
  score?: Score[];

  getAllScore(){
    this.scoreService.getAllScore().subscribe(data=>{
      this.score = data;
      console.log(data);
    });
  }

  ngOnInit(): void {
    this.getAllScore();
  }
  

}
