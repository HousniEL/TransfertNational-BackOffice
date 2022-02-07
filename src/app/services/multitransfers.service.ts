import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MultitransfersService {
  

  constructor(private _http:HttpClient) { }

  baseUrl :string= "https://ensa-api-transfer.herokuapp.com/api_backoffice/";
  
  multitransfer : any = [];

  add(transfer : any) {
      this.multitransfer.push(transfer);
      return true;
  }

  supprimer(transfer : any) {
      this.multitransfer = this.multitransfer.filter((element: any) => { return element != transfer });
  }

  public GetMultitransfers(currentpage : any){
    return this._http.get(this.baseUrl+"Multitransfers?page=" + currentpage);
  }
  
  public GetMultitransfers_Count(){
    return this._http.get(this.baseUrl+"Multitransfers/count");
  }

  public setTransfer(transfer:any){
    return this._http.post(this.baseUrl+"createTransfer",transfer);
  }

  public GetMultitransfer_byreference(reference: any) {
    return this._http.get(this.baseUrl+"UniqueTransfer/"+reference);
  }

  public BloqueTransfer_byreference(reference: any,motif :string) {
    return this._http.put(this.baseUrl+"UniqueTransfer/bloque/"+reference+"?motif="+motif,{});
  }

  public DebloqueTransfer_byreference(reference: any,motif :string) {
    return this._http.put(this.baseUrl+"UniqueTransfer/unlock/"+reference+"?motif="+motif,{});
  }

  public ExtortTransfer_byreference(reference: any,motif :string) {
    return this._http.put(this.baseUrl+"UniqueTransfer/extort/"+reference+"?motif="+motif,{});
  }

}
