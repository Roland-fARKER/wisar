import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';
import { Rol } from '../../models/Rol.model';
import { createUser, User } from '../../models/User.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
  ) { }

  // Registro de usuario
  async register(userData: createUser): Promise<User | null> {
    const urol: Rol = { id: 'koDJdzetaHAVk41XuiM5', name: 'user', state: true };
  
    // Validaciones básicas
    if (!userData.email || !userData.password || !userData.firstName || !userData.lastName) {
      throw new Error('Faltan campos requeridos para el registro');
    }
  
    try {
      const userCredential = await this.afAuth.createUserWithEmailAndPassword(
        userData.email,
        userData.password
      );
      const uid = userCredential.user?.uid;
  
      if (uid) {
        const user: User = {
          uid: uid,
          email: userData.email,
          firstName: userData.firstName,
          lastName: userData.lastName,
          profilePhotoUrl: null,
          rol: urol,
          phone: userData.phone,
          departamento: userData.departamento,
          municipio: userData.municipio,
          direccion: userData.direccion,
          genero: userData.genero
        };
  
        await this.firestore.collection('users').doc(uid).set(user);
        return user;
      }
  
      return null; 
    } catch (error) {
      console.error('Error en el registro:', error);
      throw error; 
    }
  }

  // Login de usuario
  async login(email: string, password: string) {
    try {
      const userCredential = await this.afAuth.signInWithEmailAndPassword(email, password);
      this.setUserData(userCredential.user);
      return userCredential;
    } catch (error) {
      console.error('Error en el login:', error);
      throw error;
    }
  }

  // Logout
  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    this.afAuth.signOut().then(() => {
      window.location.reload();
    });
  }


  // Estado de autenticación
  getUser() {
    return this.afAuth.authState;
  }

  // Guardar datos del usuario en localStorage
  private setUserData(user: firebase.User | null) {
    if (user) {
      const token = user.getIdTokenResult();
      localStorage.setItem('user', JSON.stringify(user));
      token.then(idToken => {
        localStorage.setItem('token', idToken.token);
      });
    }
  }

  // Obtener token del localStorage
  getToken() {
    return localStorage.getItem('token');
  }

  // Obtener usuario del localStorage
  getStoredUser() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }
}
