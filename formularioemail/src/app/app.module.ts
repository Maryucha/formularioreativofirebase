import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';
import { DataDbService } from './services/data-db.service';
import { ErroComponent } from './components/erro/erro.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ErroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [DataDbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
