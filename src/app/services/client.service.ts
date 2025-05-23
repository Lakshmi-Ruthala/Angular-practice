import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { client } from '../model/class/client';
import { environment } from 'src/environments/environment';
import { APIResponseModel } from '../model/interface/role';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http:HttpClient) { }

  getAllClients():Observable<APIResponseModel>{
return this.http.get<APIResponseModel>("/api/ClientStrive/GetAllClients");
  }
addUpdate(obj:client):Observable<APIResponseModel>{
return this.http.post<APIResponseModel>("/api/ClientStrive/AddUpdateClient",obj);
  }
  deleteClientById(id:number):Observable<APIResponseModel>{
return this.http.delete<APIResponseModel>("/api/ClientStrive/DeleteClientByClientId?clientId=" + id);
  }
}
