import { Component, OnInit } from '@angular/core';
import { Conference } from '../model/model.conference';
import { HttpClient } from '@angular/common/http';
import { ConferenceService } from 'src/services/conference.service';
import { Localisation } from '../model/model.localisation';
import {FormBuilder, FormGroup, Validators ,FormControl} from '@angular/forms';
import { Comite } from '../model/model.comite';
import { Router } from '@angular/router';
import { Planning } from '../model/model.planning';
import { FlashMessagesService } from 'angular2-flash-messages';



@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent implements OnInit {
  reactiveForm = new FormGroup({
    longitude: new FormControl(''),
    latitude: new FormControl(''),
    
    adresse: new FormControl('',Validators.required),
    ville: new FormControl('',Validators.required),
    pays: new FormControl('',Validators.required),
    
    
    });
    reactiveForm6 = new FormGroup({
      tempa: new FormControl(''),
      programmea: new FormControl(''),
      tempb: new FormControl(''),
      programmeb: new FormControl(''),
      tempc: new FormControl(''),
      programmec: new FormControl(''),
      tempd: new FormControl(''),
      programmed: new FormControl('')
      });

        reactiveForm4 = new FormGroup({
          titre: new FormControl('',Validators.required),
          categorie: new FormControl('',Validators.required),
          image: new FormControl('',Validators.required),
          email: new FormControl('',Validators.email),
          site: new FormControl('',Validators.required),
          description: new FormControl('',Validators.required),
          date_debut: new FormControl('',Validators.required),
        date_fin: new FormControl('',Validators.required)
          
          });
          reactiveForm5 = new FormGroup({
            nom: new FormControl(''),
            prenom: new FormControl(''),
            tel: new FormControl(''),
            email: new FormControl(''),
            categorie: new FormControl(''),
            conference: new FormControl('')
            });

  latitude=31.63000;
  longitude=-8.00889;
  locationChosen = false;


  public currentTime: number;
  public editPhoto: boolean;
  
  selectedFiles: any;
  public localisation:Localisation=new Localisation();
  myLocalisation:Localisation[]=[];
  conference:Conference=new Conference();
  myconference: Conference[] =[];
  
  mylocalisation:Localisation[]=[];
  comite:Comite=new Comite();
  mycomite:Comite[]=[];
  
  planning:Planning=new Planning();

  public comites:any;

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private conferenceservice:ConferenceService,
    private _formBuilder: FormBuilder,private router:Router,private flashmessage:FlashMessagesService) { }

  ngOnInit() {
   this.getComite();
   
  }
/////////////////
  onSelectedFile(event) {
    this.selectedFiles=event.target.files;
    const file = event.target.files[0];
    this.selectedFiles =file;
  }

  uploadPhoto() {
    const formData = new FormData();
    formData.append('conference',JSON.stringify({titre:this.reactiveForm4.value.titre,
      categorie:this.reactiveForm4.value.categorie,
      image:this.reactiveForm4.value.image,
      email:this.reactiveForm4.value.email,
      site:this.reactiveForm4.value.site,
      description:this.reactiveForm4.value.description,
      date_debut:this.reactiveForm4.value.date_debut,
      date_fin:this.reactiveForm4.value.date_fin,
      acceptation:false }));
    formData.append('localisation',JSON.stringify({
      longitude:this.reactiveForm.value.longitude,
      latitude:this.reactiveForm.value.latitude,
      adresse:this.reactiveForm.value.adresse,
      ville:this.reactiveForm.value.ville,
      pays:this.reactiveForm.value.pays }));
    formData.append('planning',JSON.stringify({
      tempa:this.reactiveForm6.value.tempa,
      programmea:this.reactiveForm6.value.programmea,
      tempb:this.reactiveForm6.value.tempb,
      programmeb:this.reactiveForm6.value.programmeb,
      tempc:this.reactiveForm6.value.tempc,
      programmec:this.reactiveForm6.value.programmec,
      tempd:this.reactiveForm6.value.tempd,
      programmed:this.reactiveForm6.value.programmed}));
    formData.append('file',this.selectedFiles);
    this.conferenceservice.saveConf(formData).subscribe(data =>{
      
      this.flashmessage.show('Conference added successfully.',{cssClass: 'alert alert-success',timeout:5000})
     //this.router.navigateByUrl('home');
    },(error)=>{
      console.log(error);
    });                   
  }



save(){
  this.conferenceservice.saveconference(this.conference)
  .subscribe((conf) => {
    this.myconference=[conf, ...this.myconference]
  })
  this.conferenceservice.savelocalisation(this.localisation)
  .subscribe((loca)=>{
    this.mylocalisation=[loca, ...this.mylocalisation]
  })
  
}
saveComite(){
this.conferenceservice.saveComite(this.comite)
.subscribe((com)=>{
  this.mycomite=[com, ...this.mycomite]
})
  
}

savecomiteavecconfe(){
  const formData = new FormData();
  formData.append('comites',JSON.stringify({nom:this.reactiveForm5.value.nom,
                                    prenom:this.reactiveForm5.value.prenom,
                                    tel:this.reactiveForm5.value.tel,
                                    email:this.reactiveForm5.value.email,
                                    categorie:this.reactiveForm5.value.categorie
  }));
  formData.append('conference',JSON.stringify(this.reactiveForm5.value.conference));
  this.conferenceservice.savecomiteavecconfe(formData).subscribe(data=>{
    this.router.navigateByUrl('home');
    
  },(error)=>{
    console.log(error);
  });
}






getComite(){

  this.conferenceservice.findAll()
  .subscribe(data=>{
    this.comites=data;
  },err=>{
    console.log(err);
  })
}

ondelet(c){
  let conf=confirm("suuuur !!!");
  if(conf){
    this.conferenceservice.deletmembre(c._links.self.href)
    .subscribe(data=>{
      this.getComite();
    },err=>{
      console.log(err);
    })
  }
}

saveL(id){
  this.conferenceservice.savelocal(id,this.localisation)
  .subscribe((local)=>{
    this.myLocalisation=[local, ...this.myLocalisation]
  })
}



  onChoseLocation(event) {
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
    this.locationChosen = true;
    
  }

  
}
