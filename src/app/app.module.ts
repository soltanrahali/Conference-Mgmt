import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AjouterComponent } from './ajouter/ajouter.component';
import{ AuthComponent} from './auth/auth.component'
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {HttpClientModule} from '@angular/common/http';
import { ConferenceService } from 'src/services/conference.service';
import { AgmCoreModule} from '@agm/core';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { AgendaComponent } from './agenda/agenda.component';
import { AuthentificationService } from 'src/services/authentification.service';
import { AdminComponent } from './admin/admin.component';
import {MatCardModule} from '@angular/material/card';
import {MatBadgeModule} from '@angular/material/badge'
import {MatExpansionModule} from '@angular/material/expansion';
import { DetailsComponent } from './details/details.component';
// import { TexteditorModule } from 'ng-texteditor';






@NgModule({

  declarations: [
    
    AppComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    AjouterComponent,
    AgendaComponent,
    AuthComponent,
    AdminComponent,
    DetailsComponent,
  ],
  imports: [
    
    BrowserModule,
    ReactiveFormsModule,MatExpansionModule,
    FormsModule,MatBadgeModule,
    AppRoutingModule, BrowserAnimationsModule, 
    MatToolbarModule,
    MatInputModule,MatIconModule,MatCardModule,
    MatFormFieldModule,MatSelectModule,MatSidenavModule,
    HttpClientModule,AgmCoreModule.forRoot({
      apiKey:'AIzaSyA8XZOvt7au3RotHynQwE_iI7eJ--CLNm0'
    }),
    MatStepperModule,MatButtonModule,
    // TexteditorModule,
    FlashMessagesModule.forRoot(),
    

  ],

  providers: [ConferenceService,AuthentificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
