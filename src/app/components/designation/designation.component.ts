import { Component, inject, OnInit } from '@angular/core';
import { APIResponseModel, IDesignation } from 'src/app/model/interface/role';
import { MasterService } from 'src/app/services/master.service';

@Component({
  selector: 'app-designation',
  templateUrl: './designation.component.html',
  styleUrls: ['./designation.component.css']
})
export class DesignationComponent implements OnInit {

  designtionList: IDesignation[]=[];
  isLoader:boolean=true;
  
  
  // masterService= inject(MasterService)


  constructor(private masterService:MasterService) { }

  ngOnInit(): void {
    this.masterService.getDesignations().subscribe((result:APIResponseModel)=>{
      this.designtionList=result.users;
      this.isLoader=false;
    },error=>{
      alert("API error")
       this.isLoader=false;
    })
  }

}
