import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private firestore:AngularFirestore) { }
 
  loadData(){
    return this.firestore.collection('categories').snapshotChanges().pipe(
      map(actions=>{
        return actions.map(a=>{
          const data= a.payload.doc.data();
          const id=a.payload.doc.id;
          return{id, data}

        })
      })
    )
  }

}
