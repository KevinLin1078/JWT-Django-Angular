import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  username = 'root '
  password = 'root'
  url = 'http://127.0.0.1:8000/login/'
  home_url = 'http://127.0.0.1:8000/home/'

  headers = new HttpHeaders({'Authorization': localStorage.getItem('access')});

  constructor(public HttpClient: HttpClient){}

  login(form){
    let formData = new FormData()
    formData.append('username', this.username);
    formData.append('password', this.password)

    this.login_user(formData).subscribe(
      (resp)=>{
        console.log("logged in ")
        localStorage.setItem('refresh', "Bearer " +  resp['refresh'])
        localStorage.setItem('access', "Bearer "  + resp['access'])
      },
      (err)=>{
        
      }
    )

  }

  login_user(formData){
    return this.HttpClient.post<any>(this.url, formData ,{/*observe:'response' as 'body',*/ withCredentials: true})
  }

  go_home(){
    this.HttpClient.get<any>(this.home_url,{headers: {'Authorization': localStorage.getItem('access')  }, withCredentials: true }).subscribe(
      (resp)=>{
        console.log(resp)
      },
      (err)=>{
        console.log(err)
      }
    );


  }




}
