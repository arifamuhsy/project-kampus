import { Component, OnInit } from '@angular/core';
import { LoginuserService } from '../loginuser.service';
import { FormControl } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:User = new User();
  constructor(private loginuserservice: LoginuserService) { }

  ngOnInit(): void {
  }
  userLogin(){
    this.loginuserservice.loginUser(this.user).subscribe(data=>{
      alert("Login Success")
    },error=>alert("Sorry, please enter correct username and password"));
  }

  username = new FormControl('');
  email = new FormControl('');
  password = new FormControl('');

}
