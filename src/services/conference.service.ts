import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import { Conference } from 'src/app/model/model.conference';
import { Localisation } from 'src/app/model/model.localisation';
import { Comite } from 'src/app/model/model.comite';
import {Observable} from 'rxjs';
import { Participant } from 'src/app/model/model.participant';


@Injectable({
    providedIn: 'root'
})
export class ConferenceService{
    public host:string="http://localhost:8191";
    public urlapi:string="http://localhost:8191/conferences";
    constructor(private http: HttpClient){
    }

    
saveconference(conference:Conference){
return this.http.post<Conference>(this.host +'/conferences',conference);
}

savelocalisation(localisation:Localisation){
    return this.http.post<Localisation>("http://localhost:8191/localisations",localisation);
    }

findAll(){
    return this.http.get("http://localhost:8191/comites");
}
public getResource(url){
    return this.http.get(this.host+url);
}


saveComite(comite:Comite){
    return this.http.post<Comite>("http://localhost:8191/comites",comite);

}

savecomiteavecconfe(formData: FormData)
{
    return this.http.post("http://localhost:8191/comite/add",formData)
}
public deletmembre(url){
   return this.http.delete(url);
}


getconference(page:number,size:number){
    return this.http.get(this.host+'/conferences?page='+page+'&size='+size);
}



  saveConf(formData: FormData){
    return this.http.post(this.host +'/conference/photoConference',formData);
} 

public patchResource(id,acceptation){
    return this.http.patch(this.urlapi+'/editeConf/'+id,{acceptation:!acceptation});
  }

 savelocal(id,localisation:Localisation)
  {
      return this.http.post<Localisation> ('http://localhost:8191/localisations/addlocal/'+id
      ,localisation)
  }

  saveParticipant(id,participant:Participant){
return this.http.post<Participant>(this.host+'/participants/add/'+id,participant)
  }

  public getDetails(url){
    return this.http.get(url);
}

public getLocalisation(c){
return this.http.get(c._links.localisations.href);
}

public getplanning(a){
    return this.http.get(a._links.plannings.href);
}


}