import { first } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { auth } from 'firebase/app';
import { User } from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Item { name: string; name2: string; name3: string; name4: string; }

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;

  private itemDoc: AngularFirestoreDocument<Item>;

 
  public user: User;

  constructor(public afAuth: AngularFireAuth, private afs: AngularFirestore) { 
    this.itemsCollection = afs.collection<Item>('items');
    this.items = this.itemsCollection.valueChanges();
  }

  lista(){
    return this.items;
  }

  agregarItem(item: Item) {
    this.itemsCollection.add(item);
  }

  eliminarItem(item){
    this.itemDoc = this.afs.doc<Item>(`items/${item.id}`);
    this.itemDoc.delete();
  }

  EditarItem(item){
    this.itemDoc = this.afs.doc<Item>(`items/${item.id}`);
    this.itemDoc.update(item);
  }

  async login(email:string, password:string){

    try {
      const result = await this.afAuth.signInWithEmailAndPassword(email,password);
      return result;

    } catch (error) {
      console.log(error);
    }
  }
  async register(email:string, password:string){
    try {
      const result = await this.afAuth.createUserWithEmailAndPassword(email,password);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
  async logout(){
    try {
    await this.afAuth.signOut();
    } catch (error) {
      console.log(error);
    }
  }
  getCurrentUser(){
    return this.afAuth.authState.pipe(first()).toPromise();
  }
}
