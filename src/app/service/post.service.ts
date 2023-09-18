import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';

import {  increment } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private afs:AngularFirestore) { }
  loadFeatured(){
    return this.afs.collection('posts',ref=> ref.where('isFeatured','==', true).limit(4)).snapshotChanges().pipe(
      map(actions=>{
        return actions.map(a=>{
          const data= a.payload.doc.data();
          const id=a.payload.doc.id;
          return{id, data}

        })
      })
    )
  }
  loadLatest(){
    return this.afs.collection('posts',ref=> ref.orderBy('createAt')).snapshotChanges().pipe(
      map(actions=>{
        return actions.map(a=>{
          const data= a.payload.doc.data();
          const id=a.payload.doc.id;
          return{id, data}

        })
      })
    )
  }
  loadcategoryPost(id){
    return this.afs.collection('posts',ref=> ref.where('category.id','==',id)).snapshotChanges().pipe(
      map(actions=>{
        return actions.map(a=>{
          const data= a.payload.doc.data();
          const id=a.payload.doc.id;
          return{id, data}

        })
      })
    )
  }
//   loadOnePost(id){
// this.afs.doc(`post/${id}`).valueChanges();
//   }
  loadOnePost(id){
    return this.afs.doc(`posts/${id}`).valueChanges();
 }
  
 loadSimilarPost(catId){
  return this.afs.collection('posts',ref=> ref.where('category.id','==', catId).limit(4)).snapshotChanges().pipe(
    map(actions=>{
      return actions.map(a=>{
        const data= a.payload.doc.data();
        const id=a.payload.doc.id;
        return{id, data}

      })
    })
  )
 }
//  countViews(id){
//   const viewsCount ={
//     views: firebase.default.firestore.FieldValue.increment(1)
//   }
//   this.afs.doc(`posts/${id}`).update(viewsCount).then(()=>{
//     console.log('View Count Updated')
//   }) 

//  }
countViews(postId){
  
  const viewsCount = {
    views: increment(1)
  }
  return this.afs.doc(`posts/${postId}`).update(viewsCount).then(()=>{
       console.log('View Count Updated')
})
}}
