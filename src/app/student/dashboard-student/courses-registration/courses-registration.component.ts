import { Component, OnInit } from '@angular/core';
import { Subject } from '../../model/subject.model';
import { SubjectService } from '../../service/subject.service';


@Component({
  selector: 'app-courses-registration',
  templateUrl: './courses-registration.component.html',
  styleUrls: ['./courses-registration.component.css']
})
export class CoursesRegistrationComponent implements OnInit {
  
  constructor(private subjectService: SubjectService){}
  subject?: Subject[];

  getAllSubject(){
    this.subjectService.getAllSubject().subscribe(data=>{
      this.subject = data;
      console.log(this.subject);
    });
  }
  
  ngOnInit() {
    this.getAllSubject();
  }

}
