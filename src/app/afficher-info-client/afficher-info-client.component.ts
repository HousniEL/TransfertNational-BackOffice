import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientDataService } from 'src/app/services/client-data.service';

@Component({
  selector: 'app-afficher-info-client',
  templateUrl: './afficher-info-client.component.html',
  styleUrls: ['./afficher-info-client.component.css']
})
export class AfficherInfoClientComponent implements OnInit {

  Clients : Array<any> = [];

  totalRecords ?: any;
  page : number = 1;
  recherche ?: string;

  errorRecherche = "";
  
  Pass(cin:number){
    this.router.navigate(['clients-list/'+cin]);
  }

  constructor(private router : Router, private route : ActivatedRoute, private clientService : ClientDataService) {
    /*this.route.queryParams.subscribe(params => {
      if(params['page'] != undefined) this.page = params['page'];
    });
    this.getClients(this.page);*/
  }

  ngOnInit(): void {
    this.totalRecords = 8;
    this.clientService.getClientsByPage(8).subscribe((res) => {
      this.Clients = res;
    });
  }

  getClients(currentpage:number){
    this.clientService.getClientsByPage(currentpage).subscribe((data2:any) => {
      this.Clients = data2;
    }, (error:any) => {
      console.log(error);
    });
}

  invalidRecherche(){
    return this.errorRecherche != "";
  }

  chercher(){
    var transfer : any = document.getElementById("chercher");
    transfer.innerHTML = "<i class='fa fa-circle-o-notch fa-spin fa-fw'></i>";
    transfer.setAttribute('disabled', true);
    this.errorRecherche="";
    if(!this.recherche){
      this.errorRecherche="Champ vide!";
      transfer.innerHTML = "Chercher";
      transfer.removeAttribute("disabled");
    }
    else{
      this.clientService.getClientByCin(this.recherche).subscribe(val => {
        this.router.navigate(['clients-list/'+this.recherche]);
      }, err => {
        this.errorRecherche = err.error.error;
        transfer.innerHTML = "Chercher";
        transfer.removeAttribute("disabled");
      })
    }
  }

  changepage(currentpage:any){
    this.page = currentpage;
    var current_path = location.protocol + '//' + location.host + location.pathname;
    window.location.href = current_path+"?page="+currentpage;
  }

}
