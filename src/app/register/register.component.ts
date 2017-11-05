import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  users:Array<User>;


  constructor(
    private userSer:UserServiceService
  ) { }

  ngOnInit() {
  }

  onRegister(myForm:NgForm){
    console.log(myForm.value);
    let user:User=new User();
    user.role=myForm.value.role;
    user.first_name=myForm.value.first_name;
    user.last_name=myForm.value.last_name;
    user.user_name=myForm.value.user_name;
    user.email=myForm.value.email;
    user.password=myForm.value.password;
    user.password_confirmation=myForm.value.password_confirmation;

    this.userSer.saveUser(user)
    .subscribe(respNewUser =>{
      console.log(respNewUser);
      
      this.users.push(respNewUser);
    })

    this.userSer.sendEmail().subscribe(respMail => console.log(respMail));


  }

}
