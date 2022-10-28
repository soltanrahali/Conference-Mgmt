import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AjouterComponent } from './ajouter/ajouter.component';
import { AuthComponent } from './auth/auth.component';
import { AdminComponent } from './admin/admin.component';
import { AgendaComponent } from './agenda/agenda.component';
import { DetailsComponent } from './details/details.component';


const routes: Routes = [
{
  path:"about",component:AboutComponent
},
{
  path:"contact",component:ContactComponent
},
{
  path:"home",component:HomeComponent
},
{
  path:"ajouter",component:AjouterComponent
},
{
  path:"",redirectTo:"home",pathMatch:"full"
},
{
  path:"auth",component:AuthComponent
},
{
  path:"admin",component:AdminComponent
  
},
{
  path:"agenda",component:AgendaComponent
},
{
  path:"details/:id",component:DetailsComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
