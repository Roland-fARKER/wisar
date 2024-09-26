import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, of } from 'rxjs';
import { User } from '../../models/User.model';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { switchMap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService1 {
  private usersCollection = this.firestore.collection<User>('users');

  constructor(
    private firestore: AngularFirestore,
    private afAuth: AngularFireAuth
  ) { }

  // Obtener todos los usuarios
  getUsers(): Observable<User[]> {
    return this.usersCollection.valueChanges();
  }

  // Obtener un usuario por UID
  getUserByUid(uid: string): Observable<User | null> {
    return this.firestore.doc<User>(`users/${uid}`).valueChanges().pipe(
      map(user => user || null) // Si `user` es `undefined`, emite `null` en su lugar.
    );
  }

  // Obtener el usuario logueado
  getCurrentUser(): Observable<User | null> {
    return this.afAuth.authState.pipe(
      switchMap((user) => {
        if (user) {
          return this.getUserByUid(user.uid);
        } else {
          return of(null);
        }
      })
    );
  }

  async updateUserShopId(userId: string, shopId: string) {
    await this.firestore.collection('users').doc(userId).update({ shopId });
  }

  updateProfilePhotoUrl(uid: string, newPhotoUrl: string): Promise<void> {
    return this.firestore.doc<User>(`users/${uid}`).update({ profilePhotoUrl: newPhotoUrl });
  }
}
