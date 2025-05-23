import { HttpClient } from '@angular/common/http';
import { Component, NgModule, OnInit } from '@angular/core';
import { APIResponseModel, IRole } from 'src/app/model/interface/role';


@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})

export class RolesComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
this.getAllRoles();
  }
firstName: string = "Angular tutorial";
angularversion = "Version 18";
version: number = 18;
isActive : boolean=false;
currentDate : Date = new Date();
inputType : string = "textbox";
selectedState : string='';
roleList:IRole[] =[];
showAlert(){
  alert("Hello Angular");
}

showMessage(message:string){
alert(message);
}
getAllRoles(){
  this.http.get<APIResponseModel>("https://dummyjson.com/users").subscribe((res:APIResponseModel)=>{
    this.roleList = res.users;
  })
}
}
