import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MultiTransfer } from 'src/Models/Transfer';
import { MultitransfersService } from '../services/multitransfers.service';

@Component({
  selector: 'app-transfert-list',
  templateUrl: './transfert-list.component.html',
  styleUrls: ['./transfert-list.component.css']
})
export class TransfertListComponent implements OnInit {

  multitransfers : MultiTransfer[] = [];

  totalRecords ?: any;
  page : number = 1;
  reference ?: string;

  errorReference = "";

  status : string[]=[
    "A_servir",
    "Servie",
    "Extourner",
    "Restituer",
    "Bloquer",
    "Debloquer",
    "Desherencer"
  ]

  constructor(private route: ActivatedRoute, private router : Router, private transferService : MultitransfersService) {
    this.route.queryParams.subscribe(params => {
      if(params['page'] != undefined) this.page = params['page'];
    });
    this.getTransfers(this.page);
  }

  ngOnInit(): void {
    this.totalRecords = 8;
    this.transferService.GetMultitransfers_Count().subscribe((res) => {
      this.totalRecords = res;
    }, (err) =>  {

    })
  }

  getTransfers(currentpage:number){
      this.transferService.GetMultitransfers(currentpage).subscribe((data2:any) => {
        this.multitransfers = data2;
      }, (error:any) => {
        console.log(error);
      });
  }

  changepage(currentpage:any){
    this.page = currentpage;
    var current_path = location.protocol + '//' + location.host + location.pathname;
    window.location.href = current_path+"?page="+currentpage;
  }
  

  restituer_transfers(multT:any){
    let tmp = this.multitransfers[multT];
    tmp.transfers = tmp.transfers.filter((transf:any) => {
        transf["transfer_status"] = 4
        return transf.transfer_status==4;
      });
    let index = this.multitransfers.indexOf(tmp);
    this.multitransfers[index] = tmp;
  }


  getStatus(status: Number) : any{
    if( status === 1 || status == 6 ){
      return "aservir";
    }
    if( status === 2){
      return "servie";
    }
    if( status === 4 || status == 3 ){
      return "nonbloquee";
    }
    if( status === 5 || status == 7 ){
      return "bloquee";
    }
    
  }

  invalidReference(){
    return this.errorReference != "";
  }


  chercher(){
    this.errorReference="";
    if(!this.reference) this.errorReference="Champ vide !"
    else{
      this.transferService.GetMultitransfer_byreference(this.reference).subscribe((data:any) => {
        window.location.href="/extourne_transfert/"+this.reference;
      }, (error:any) => {
        this.errorReference = error.error.error;
      });
    }
  }


}
