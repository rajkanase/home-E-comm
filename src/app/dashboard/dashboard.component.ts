import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers:[UserServiceService]
})
export class DashboardComponent implements OnInit {

  constructor(
    private userSer:UserServiceService
  ) { }

   users:Array<User>;
   welcome;
   usr;

  // users: User[]=[
  //   {
  //     "_id":"1",
  //     "role":"Admin Registration",
  //     "first_name":"rajkumar",
  //     "last_name":"kanase",
  //     "user_name":"raj.kanase",
  //     "email":"raj@gmail.com",
  //     "password":"123",
  //     "password_confirmation":"123"}
  // ];

  ngOnInit() {
    this.userSer.getUsers()
    .subscribe(respUser=>this.users=respUser);
  }


  onWelcome(){
    this.welcome=true;
    this.usr=false;
    
  }
  onMngUsr(){
    this.usr=true;
    this.welcome=false;
  }

}
