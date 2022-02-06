import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import {ProfilComponent} from './compte/profil/profil.component';
import { LoginGuard } from './guard/login.guard';
import { NavMatComponent } from './Menu/nav-mat/nav-mat.component';
import { AfficherInfoClientComponent } from './afficher-info-client/afficher-info-client.component';
import { TransfertListComponent } from './transfert-list/transfert-list.component';
import { BlacklistComponent } from './blacklist/blacklist.component';
import { TransfertInfoComponent } from './transfert-info/transfert-info.component';
import { ClientInfoComponent } from './client-info/client-info.component';
import { MakeTransfertComponent } from './make-transfert/make-transfert.component';
import { ExtourneComponent } from './extourne/extourne.component';


const routes: Routes = [
  { path:'', component : NavMatComponent},
  { path:'profile',canActivate: [ LoginGuard ], component : ProfilComponent },
  { path:'blacklist',canActivate : [LoginGuard], component : BlacklistComponent },
  { path:'clients-list',canActivate : [LoginGuard], component : AfficherInfoClientComponent },
  { path:'clients-list/:cin',canActivate : [LoginGuard], component : ClientInfoComponent },
  { path:'transferts',canActivate : [LoginGuard], component : TransfertListComponent },
  { path:'extourne_transfert/:reference',canActivate : [LoginGuard], component : ExtourneComponent },
  { path:'emet-transferts',canActivate : [LoginGuard], component : MakeTransfertComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
