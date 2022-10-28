
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})

export class AuthentificationService{

    private users=[
        {usernam:'admin',password:'1234',roles:['ADMIN']},
        {usernam:'rida',password:'1234',roles:['ADMIN']}
    ]

    public isAuthenticated:boolean;
    public userAuthenticated;
    public token:string;
    constructor(){
    }

    public login(username:string,password:string){
        let user;
        this.users.forEach(u=>{
            if(u.usernam==username && u.password==password){
                user=u;
                this.token=btoa(JSON.stringify({username:u.usernam,roles:u.roles}));
            }
        });
        if(user){
            this.isAuthenticated=true;
            this.userAuthenticated=user;
        }else{
            this.isAuthenticated=false;
            this.userAuthenticated=undefined;
        }
    }

    public saveauthentificationuser(){
        if(this.userAuthenticated){
            localStorage.setItem('authToken',this.token); 

        }
    }

    loadAuthentificationUserFromLocalStorige(){
        let t=localStorage.getItem('authToken');
        if(t){
            let user = JSON.parse(atob(t));
          this.userAuthenticated= {username:user.username,roles:user.roles};
          this.isAuthenticated=true;
          this.token=t;
        }
      }

      public removeTokenFromLocalStorage(){
          localStorage.removeItem('authToken');
          this.isAuthenticated=false;
          this.token=undefined;
          this.userAuthenticated=undefined;
      }
      public isAdmin(){
          if(this.userAuthenticated){
              if(this.userAuthenticated.roles.indexOf('ADMIN')>-1)
              return true;
          }
          return false;
      }

}