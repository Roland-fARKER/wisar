import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map, switchMap, take, tap } from 'rxjs/operators';
import { Message } from '../models/message.entitie';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  constructor(private firestore: AngularFirestore) {}

  // Obtener la lista de usuarios
  getUsers(): Observable<any[]> {
    return this.firestore.collection('users').valueChanges();
  }

  // Obtener mensajes de un chat específico
  getMessages(chatId: string): Observable<Message[]> {
    return this.firestore.collection('chats').doc(chatId)
        .collection('messages', ref => ref.orderBy('timestamp'))
        .valueChanges()
        .pipe(
          map((messages: any[]) => messages.map(message => ({
            id: message.id,
            text: message.text,
            senderId: message.senderId,
            timestamp: message.timestamp,
            chatId: message.chatId,
            isRead: message.isRead
          })))
        );
  }

  // Enviar un nuevo mensaje
  sendMessage(chatId: string, message: Message): Promise<void> {
    return this.firestore.collection('chats').doc(chatId).collection('messages').add(message)
      .then(() => { 
        console.log('Mensaje enviado');
      })
      .catch((error) => {
        console.error('Error al enviar el mensaje:', error);
      });
  }

  // Obtener chats en los que el usuario está involucrado
  getUserChats(uid: string) {
    // Suponiendo que usas Firebase
    return this.firestore.collection('chats', ref => ref.where('participants', 'array-contains', uid))
      .valueChanges()
      .pipe(
        tap(chats => console.log('Chats obtenidos:', chats)) // Añade log aquí
      );
  }
  // Verificar si ya existe un chat entre dos usuarios y devolver el chat existente o crear uno nuevo
  getOrCreateChat(userId1: string, userId2: string): Observable<string> {
    return this.firestore.collection('chats', ref =>
      ref.where('participants', 'array-contains', userId1)
    ).snapshotChanges().pipe(
      map(actions => actions.map(a => ({
        id: a.payload.doc.id,
        ...a.payload.doc.data() as any
      }))),
      map(chats => chats.find(chat => chat.participants.includes(userId2))),
      switchMap(existingChat => {
        if (existingChat) {
          return new Observable<string>(observer => {
            observer.next(existingChat.id);
            observer.complete();
          });
        } else {
          const newChat = {
            participants: [userId1, userId2],
            createdAt: new Date()
          };
          return this.firestore.collection('chats').add(newChat).then(docRef => docRef.id);
        }
      }),
      take(1) // Complete the Observable after getting the chat ID
    );
  }

  markMessagesAsRead(chatId: string, userId: string): void {
    const messagesRef = this.firestore.collection('chats').doc(chatId).collection('messages');
    messagesRef.ref.where('isRead', '==', false)
      .where('senderId', '!=', userId)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          doc.ref.update({ isRead: true });
        });
      });
  }

  // Obtener datos de un usuario por su ID
  getUserById(userId: string) {
    return this.firestore.collection('users').doc(userId).valueChanges()
      .pipe(
        tap(user => console.log('Usuario obtenido:', user)) // Añade log aquí
      );
  }
  // Obtener datos de múltiples usuarios por sus IDs
  getUsersByIds(userIds: string[]): Observable<any[]> {
    const userObservables = userIds.map(id => this.getUserById(id));
    return forkJoin(userObservables);
  }
}
