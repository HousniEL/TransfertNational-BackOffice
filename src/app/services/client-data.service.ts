import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client, Compte } from 'src/Models/agent';

@Injectable({
  providedIn: 'root'
})
export class ClientDataService {

  Baseurl : string = "http://192.168.1.101:8083/api_backoffice/";

  constructor(private _http:HttpClient) { }

  getClientsByPage(page:any) : Observable<Client[]>{
    return this._http.get<Client[]>(this.Baseurl+"clients");
  }

  getClientByCin(cin:any) : Observable<any>{
    return this._http.get<any>(this.Baseurl+"client/cin/"+cin);
  }

  addToBlackList(id:any) : Observable<any>{
    return this._http.post(this.Baseurl + "/blacklist", { id });
  }

  checkIfBlackList(id: any) : Observable<any>{
    return this._http.post(this.Baseurl + "/blacklist", { id });
  }

}
