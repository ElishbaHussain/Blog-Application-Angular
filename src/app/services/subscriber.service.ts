import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root'
})
export class SubscriberService {

  constructor(private afs:AngularFirestore) { }
  addSub(subData){
    this.afs.collection('subscribers').add(subData).then(()=>{
      console.log('Subscriber Saved Suvvessfully')
    })

  }
  checkSub(subEmail){
   return  this.afs.collection('subscribers', ref=>ref.where('email','==',subEmail)).get()
    
  }
}
