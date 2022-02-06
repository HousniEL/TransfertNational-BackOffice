import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlackList } from 'src/Models/BlackList';
import { BlacklistService } from '../services/blacklist.service';

@Component({
  selector: 'app-blacklist',
  templateUrl: './blacklist.component.html',
  styleUrls: ['./blacklist.component.css']
})
export class BlacklistComponent implements OnInit {

  Clients : BlackList[] = [];

  totalRecords ?: any;
  page : number = 1;
  recherche ?: string;

  errorRecherche = "";

  constructor( private route : ActivatedRoute, private blackService : BlacklistService) {
    this.route.queryParams.subscribe(params => {
      if(params['page'] != undefined) this.page = params['page'];
    });
    this.getClients(this.page);
  }

  ngOnInit(): void {
    this.totalRecords = 8;
    this.blackService.getBlackList_Count().subscribe((res) => {
      this.totalRecords = res; 
    }, (err) => {
      console.log(err);  
    })
  }

  getClients(currentpage:number){
    this.blackService.getBlackListByPage(currentpage).subscribe((data2:any) => {
      this.Clients = data2;
    }, (error:any) => {
      console.log(error);
    });
  }

  invalidRecherche(){
    return this.errorRecherche != "";
  }

  chercher(){
    this.errorRecherche="";
    if(!this.recherche) this.errorRecherche="Champ vide!"
    else{
      this.blackService.getBlackListByPhoneNumber(this.recherche).subscribe( (val) => {
        this.Clients = [];
        this.Clients.push(val);
      }, (err) => {
        this.errorRecherche = err.error.error;
      })
    }
  }

  changepage(currentpage:any){
    this.page = currentpage;
    var current_path = location.protocol + '//' + location.host + location.pathname;
    window.location.href = current_path+"?page="+currentpage;
  }
  

}
