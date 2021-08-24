import { Injectable } from '@angular/core';
import {
  AngularFirestoreCollection,
  AngularFirestore,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Menssagem } from '../models/menssagem';

@Injectable({
  providedIn: 'root',
})
export class DataDbService {

  emails?: Observable<Menssagem[]>
  private contactCollection: AngularFirestoreCollection<Menssagem>;

  constructor(private afs: AngularFirestore) {
    this.contactCollection = afs.collection<Menssagem>('contacts');
    this.emails = this.contactCollection.valueChanges();
  }

  saveMensagem(newContact: Menssagem) :void{
      this.contactCollection.add(newContact);
  }
}
