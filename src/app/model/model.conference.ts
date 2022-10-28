export class Conference{
   id:number;
    titre:string="";
    categorie:string="";
    image:string="";
    date_debut:Date;
    date_fin:Date;
    description:string="";
    email:string;
    site:string;
    acceptation:boolean;
    _links : {
        self : {
          href : string;
        },
        conference : {
          href : string;
        },
        plannings: {
          href : string;
        },
        localisations : {
          href : string;
        },
        comites : {
          href : string;
        }}
    
}