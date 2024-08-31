import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private firestore: AngularFirestore) {}

  // Obtener detalles de un usuario específico
  getUser(uid: string): Observable<any> {
    return this.firestore.collection('users').doc(uid).valueChanges();
  }
}