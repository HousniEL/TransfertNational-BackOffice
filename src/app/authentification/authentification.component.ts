import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {

  errors : any = false;

  submitted = false;
  backoffice !: FormGroup;

  constructor(private formBuilder : FormBuilder,
    private authService : AuthenticationService) { }

  ngOnInit(): void {
    this.backoffice = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password : ['', Validators.required]
    });
  }

  onSubmit(){
    var authBtn : any = document.getElementsByClassName("auth")[0];
    authBtn.innerHTML = "<i class='fa fa-circle-o-notch fa-spin fa-fw'></i>";
    authBtn.setAttribute('disabled', true);
    this.errors = false;
    this.submitted=true;
    if( this.backoffice.invalid ){
      authBtn.innerHTML = "S'Authentifier";
      authBtn.removeAttribute('disabled');
      return;
    }
    if(this.backoffice.value.email!=""){
      this.authService.login({
        "email": this.backoffice.value.email,
        "password": this.backoffice.value.password
      }).subscribe( (response : any) => {
        authBtn.innerHTML = "S'Authentifier";
        authBtn.removeAttribute('disabled');
        if(response.message){
        } else {
          window.localStorage.setItem('token',response.token);
          window.localStorage.setItem('id',response.id);
          window.location.reload();
        }
      }, (error:any) => {
        this.errors = true;
        authBtn.innerHTML = "S'Authentifier";
        authBtn.removeAttribute('disabled');
      });
    }
  }

  invalidPassword():boolean{
  	return (this.submitted && this.backoffice.controls.password.errors != null );
  }

  invalidEmailUtili():boolean{
  	return (this.submitted &&  this.backoffice.controls.email.errors != null);
  }

}

    

