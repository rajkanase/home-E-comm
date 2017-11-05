import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router:Router,
    private userSer:UserServiceService
  ) { }

  user:User;
  flag:any;
  x;
  y;

  ngOnInit() {
  }

  onLogin(em,pass){
   console.log(em);
   
    // console.log('sss');
    this.userSer.checkLogin(em,pass)
    .subscribe((respUser)=>{
      if(respUser){
      this.router.navigate(['/dash']);
      }else{
        console.log('wrong');
      }
    });


   

    

  }


}
