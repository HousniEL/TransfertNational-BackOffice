import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ClientDataService } from 'src/app/services/client-data.service';
import { BlacklistService } from '../services/blacklist.service';

@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.css']
})
export class ClientInfoComponent implements OnInit {

  Client : any;

  bloque : boolean = false;
     
  constructor( private route : ActivatedRoute, private blackListService : BlacklistService, private clientService : ClientDataService ) { }


  ngOnInit(): void {

    this.route.params.subscribe((params) => {
      this.clientService.getClientByCin(params["cin"]).subscribe((val) => {
        this.Client = val;
        var user : any = {};
        user.firstName = this.Client.firstName;
        user.lastName = this.Client.lastName;
        user.phoneNumber = this.Client.phoneNumber;
        this.blackListService.checkIfClientBlocked(user).subscribe((val) => {
          this.bloque = true;
        }, (err) => {
          console.log(err);
        });
      }, (err) => {
        alert(err.message);
      });
    })

  }
  
  debloquer(){
    this.blackListService.debloquer(this.Client.id).subscribe((res : any) => {
      this.bloque = false;
    }, (err : any) => {
      console.log(err);
    })
  }

  bloquer(){
    var user : any = {};
    user.firstName = this.Client.firstName;
    user.motif = "jdjdkj";
    user.lastName = this.Client.lastName;
    user.phoneNumber = this.Client.phoneNumber;
    user.email=this.Client.email;
    user.idClient= this.Client.id;
    this.blackListService.bloquer(user).subscribe((res : any) => {
      this.bloque = true;
    }, (err : any) => {
      console.log(err);
    })
    
  }

}
