import { Component, EventEmitter, Input, OnInit ,Output} from '@angular/core';
import { Client, utilisateur } from 'src/Models/utilisateur';
import { TransferService } from "src/app/services/transfer.service";

@Component({
  selector: 'app-kyc-table',
  templateUrl: './kyc-table.component.html',
  styleUrls: ['./kyc-table.component.css']
})
export class KycTableComponent implements OnInit {

  constructor( private transferService : TransferService ) { }

  @Input() user ?: utilisateur;

  @Output() show_user_infos = new EventEmitter<boolean>();

  set_user_infos(value: boolean) {
    this.show_user_infos.emit(value);
  }

  suivant(){
    this.transferService.multiTransfer.sender_fname = this.user?.firstName!;
    this.transferService.multiTransfer.sender_lname = this.user?.lastName!;
    this.transferService.multiTransfer.sender_phnumber = this.user?.phoneNumber!;
    this.transferService.sender_selected = true;
  }

  totalRecords ?: string;
  page ?: number = 1;
  showVar: boolean = true;
  public compte:any;
  

  ngOnInit(): void {}

}
