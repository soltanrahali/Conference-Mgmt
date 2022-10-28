import { Component, OnInit } from '@angular/core';
import { ConferenceService } from 'src/services/conference.service';
import { Conference } from '../model/model.conference';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {
  public conferences;
  step = 0;
  constructor(public service:ConferenceService,
    private route:Router ) { }

  ngOnInit(): void {
    this.getConferenceAccepter();
  }

  getConferenceAccepter(){
    this.service.getResource("/conferences/search/selectedConference")
    .subscribe(data=>{
      this.conferences=data;
    },err=>{
      console.log(err);
    })
  }

  getDetail(c:Conference){
    let url=btoa(c._links.conference.href);
    this.route.navigateByUrl("details/"+url);

  }

  getDetails(c) {
    this.route.navigateByUrl("/details/"+c.id);
  }


}
