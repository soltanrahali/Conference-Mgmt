import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ConferenceService } from 'src/services/conference.service';
import { Conference } from '../model/model.conference';
import { error } from 'protractor';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import {FormBuilder, FormGroup, Validators ,FormControl} from '@angular/forms';
import { Participant } from '../model/model.participant';
import { FlashMessagesService } from 'angular2-flash-messages';





@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  public currentconference;
  public localisations;
  public plannings;
  myParticipant:Participant[]=[];


  public participant:Participant=new Participant();


  constructor(private router:Router,public service:ConferenceService,
    private  route:ActivatedRoute,private flashmessage:FlashMessagesService) { }

  ngOnInit(): void {
    
this.getdetais();

  }

  getdetais(){
    let id=this.route.snapshot.params.id;
    this.service.getDetails(this.service.host+"/conferences/"+id).subscribe(data=>{
    this.currentconference=data;
    },error=>{
      console.log(error);
    })
  }

  getlocal(c){
    this.service.getLocalisation(c)
    .subscribe(data=>{
      this.localisations=data;
    },err=>{
      console.log(err);
    })

  }

  getplan(c){
    this.service.getplanning(c)
    .subscribe(data=>{
      this.plannings=data;
    },err=>{
      console.log(err);
    })
  }

  
  latitude=31.63000;
  longitude=-8.00889;


pdf(){
  var element = document.getElementById('table');
  html2canvas(element).then((canvas)=>{
    var imgData = canvas .toDataURL('image/png');
    var doc=new jspdf();
    var imgHeight = canvas.height * 208 / canvas.width;
    doc.addImage(imgData,0,0,208,imgHeight);
    doc.save("plan.pdf");
  });
}

reactiveForm = new FormGroup({
  nom: new FormControl(''),
  prenom: new FormControl(''),
  
  email: new FormControl(''),
  
  });


addParticipant(id){
  this.service.saveParticipant(id,this.participant)
  .subscribe((part)=>{
    this.myParticipant=[part, ...this.myParticipant]

  })
this.flashmessage.show('Successfully.',{cssClass: 'alert alert-success',timeout:5000});

}


}
