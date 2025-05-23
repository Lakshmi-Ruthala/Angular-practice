import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {

currentComponent: string = "Roles";

changeTab(tabname:string){
  this.currentComponent = tabname;
}

  constructor() { }

  ngOnInit(): void {


  }


}
