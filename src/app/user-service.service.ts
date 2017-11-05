import { Injectable } from '@angular/core';
import {Http, Response, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import { User } from './user';
import {Headers} from '@angular/http';
// import * as nodemailer from 'nodemailer';


@Injectable()
export class UserServiceService {

  constructor(
    private http:Http
  ) { }

  private getUrl="/api/users";
  private postUrl="/api/saveuser";
  private loginUrl="api/login";
  private mailUrl="/api/sendmail";

  getUsers(){
    return this.http.get(this.getUrl)
    .map((response: Response)=>response.json());
  }


  saveUser(user:User){
      let headers=new Headers({'Content-Type':'application/json' });
      let options=new RequestOptions({headers: headers});
      return this.http.post(this.postUrl, JSON.stringify(user),options)
      .map((response:Response)=>response.json());
  }

  checkLogin(em,pass){
    let url=this.loginUrl+'/'+em+'/'+pass;
    console.log(url);
    
    return this.http.get(url)
    .map((response:Response) => response.json());
  
    
  }

  sendEmail(){
    return this.http.post(this.mailUrl, null, null).map(res => res.json());
  }
  

}
