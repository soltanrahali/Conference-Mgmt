import { Component, OnInit } from '@angular/core';
import { ConferenceService } from 'src/services/conference.service';

import {ActivatedRoute, Router} from '@angular/router';
import { Conference } from '../model/model.conference';
import { Localisation } from '../model/model.localisation';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {


  public size:number=4;
  public currentPage:number=0;
  public totalPages:number;
  public pages:Array<number>;

  conferences;
  conference:Conference=new Conference();
  constructor(public service:ConferenceService,private route:Router) { }

  ngOnInit(): void {
    this.getConference();
    
  }



  private getConference(){
    this.service.getconference(this.currentPage,this.size)
    .subscribe(data=>{
      
      this.totalPages=data["page"].totalPages;
      this.pages=new Array<number>(this.totalPages);
      this.conferences=data;
    },err=>{
      console.log(err);
    })
  }

  public onPage(i){
    this.currentPage=i;
    this.getConference();

  }
 

  accepte(conferences){
    let conf=confirm("confirm !!!");
    if(conf){
    this.service.patchResource(conferences.id,conferences.acceptation)
    .subscribe(data=>{
      conferences.acceptation = !conferences.acceptation
    },error=>{
      console.log(error);
    })
  }
  }


  ondelet(c){
    let conf=confirm("suuuur !!!");
    if(conf){
      this.service.deletmembre(c._links.self.href)
      .subscribe(data=>{
        this.getConference();
      },err=>{
        console.log(err);
      })
    }
  }
 

 
}
