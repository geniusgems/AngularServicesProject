import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  httpdata:any;
  constructor(public http:HttpClient){

  }

  ngOnInit(): void{
    this.http.get('https://jsonplaceholder.typicode.com/users').
    subscribe((users)=>{
      this.httpdata = users;
      console.log(this.httpdata)
    })
  }

}
