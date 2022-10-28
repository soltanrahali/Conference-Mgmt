import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { AuthentificationService } from 'src/services/authentification.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  

  constructor(public authentificationService:AuthentificationService
    ,private router:Router){

  }
  ngOnInit(): void {
    this.authentificationService.loadAuthentificationUserFromLocalStorige();
  }

  onLogout(){
    this.authentificationService.removeTokenFromLocalStorage();
    this.router.navigateByUrl('home');
  }
}
