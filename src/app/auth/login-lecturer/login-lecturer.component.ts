import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-lecturer',
  templateUrl: './login-lecturer.component.html',
  styleUrls: ['./login-lecturer.component.css']
})
export class LoginLecturerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  username = new FormControl('');
  email = new FormControl('');
  password = new FormControl('');
}
