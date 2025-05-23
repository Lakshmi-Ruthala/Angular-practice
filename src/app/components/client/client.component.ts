import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { client } from 'src/app/model/class/client';
import { APIResponseModel } from 'src/app/model/interface/role';
import { ClientService } from 'src/app/services/client.service';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  clientObj : client = new client()
clientList: client[]=[];
  constructor(private clientService:ClientService) { }

  ngOnInit(): void {
    this.loadClient();
  }
  loadClient(){
this.clientService.getAllClients().subscribe((res:APIResponseModel)=>{
this.clientList=res.data;
})
  }
onSaveClient(form:NgForm){
  debugger;
if(form.invalid){
  alert("Form is inavalid")
}
  this.clientService.addUpdate(this.clientObj).subscribe((res:APIResponseModel)=>{
    if(res.result){
      alert("Client data added succesfully");
      this.loadClient();
      this.clientObj = new client();
    }else{
      alert(res.message)
    }
  })
}

onDelete(id:number){
  const isDelete = confirm("Are you sure to delete");
  if(isDelete){
  this.clientService.deleteClientById(id).subscribe((res:APIResponseModel)=>{
if(res.result){
  alert("Deleted Successfully");
  this.loadClient();
}else{
  alert(res.message)
}
  })
  }
}
onEdit(data:client){
this.clientObj = data;
}
}
