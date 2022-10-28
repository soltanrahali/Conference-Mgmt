import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthentificationService } from 'src/services/authentification.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private router:Router,private authService:AuthentificationService) { }
  hide = true;
  showFiller = false;
  ngOnInit(): void {
    
  }

  onLogin(dataForm: any){
  this.authService.login(dataForm.username, dataForm.password);
  if(this.authService.isAuthenticated){
    this.authService.saveauthentificationuser();
    this.router.navigateByUrl('admin');
  }
 }

}
