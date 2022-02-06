import { AppRoutingModule } from './app-routing.module';
import { BrowserModule} from '@angular/platform-browser';
import {MatNativeDateModule} from '@angular/material/core';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {NgxPaginationModule} from 'ngx-pagination/dist/ngx-pagination';
import { NgModule} from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgpSortModule } from "ngp-sort-pipe";
import {FormsModule,ReactiveFormsModule} from '@angular/forms';




 
import { AppComponent } from './app.component';
import { NavMatComponent } from './Menu/nav-mat/nav-mat.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthentificationComponent } from './authentification/authentification.component';
import { ProfilComponent } from './compte/profil/profil.component';
import { LoginGuard } from './guard/login.guard';
import { RequestsInterceptor } from './Interceptor/requests.interceptor';
import { ViewTransfersComponent } from './view-transfers/view-transfers.component';
import { TransferInfosComponent } from './view-transfers/transfer-infos/transfer-infos.component';
import { TransfertListComponent } from './transfert-list/transfert-list.component';
import { ClientInfoComponent } from './client-info/client-info.component';
import { ChangeStatComponent } from './change-stat/change-stat.component';
import { BlacklistComponent } from './blacklist/blacklist.component';
import { MakeTransfertComponent } from './make-transfert/make-transfert.component';
import { KycTableComponent } from './make-transfert/kyc-table/kyc-table.component';
import { SearchByCinComponent } from './make-transfert/search-by-cin/search-by-cin.component';
import { SetSenderKycInfosComponent } from './make-transfert/set-sender-kyc-infos/set-sender-kyc-infos.component';
import { TransferByAccountDebitComponent } from './make-transfert/transfer-by-account-debit/transfer-by-account-debit.component';
import { TransferByCashComponent } from './make-transfert/transfer-by-cash/transfer-by-cash.component';
import { CommonModule } from '@angular/common';
import { TransfertInfoComponent } from './transfert-info/transfert-info.component';
import { AfficherInfoClientComponent } from './afficher-info-client/afficher-info-client.component';
import { MainComponent } from './make-transfert/transfert-form/main/main.component';
import { AddBeneficiaryComponent } from './make-transfert/transfert-form/add-beneficiary/add-beneficiary.component';
import { BeneficiariesListComponent } from './make-transfert/transfert-form/beneficiaries-list/beneficiaries-list.component';
import { ExtourneComponent } from './extourne/extourne.component';
import { ExtourneModalComponent } from './extourne/extourne-modal/extourne-modal.component';




@NgModule({
  declarations: [
    AppComponent,
    NavMatComponent,
    AuthentificationComponent,
    ProfilComponent,TransfertInfoComponent,TransfertListComponent,ClientInfoComponent,ChangeStatComponent, BlacklistComponent, MakeTransfertComponent, KycTableComponent, SearchByCinComponent, SetSenderKycInfosComponent, TransferByAccountDebitComponent, TransferByCashComponent
    ,ViewTransfersComponent,TransferInfosComponent, AfficherInfoClientComponent, MainComponent, AddBeneficiaryComponent, BeneficiariesListComponent, ExtourneComponent, ExtourneModalComponent
  ],

  imports: [
    NgpSortModule,NgxPaginationModule,
    AppRoutingModule,
    HttpClientModule,
    MatNativeDateModule,MatButtonToggleModule,MatSidenavModule,MatIconModule,MatListModule,
    MatFormFieldModule,MatSelectModule,
    BrowserAnimationsModule,BrowserModule,FormsModule,ReactiveFormsModule, CommonModule
  ],
  
  providers: [
    LoginGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestsInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }