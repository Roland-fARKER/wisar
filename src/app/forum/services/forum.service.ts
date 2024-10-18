import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Post } from '../models/Post.model';
import { Comment } from '../models/Comment.model';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { map, Observable } from 'rxjs';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root',
})
export class ForumService {
  private postsCollection = this.afs.collection('posts');

  constructor(
    private afs: AngularFirestore,
    private storage: AngularFireStorage
  ) {}

  getPosts(): Observable<Post[]> {
    return this.postsCollection.snapshotChanges().pipe(
      map((actions) =>
        actions.map((a) => {
          const data = a.payload.doc.data() as Post;
          const id = a.payload.doc.id;
          const createdAt = data.createdAt
            ? (data.createdAt as any).toDate()
            : new Date(); 
          return { id, ...data, createdAt }; 
        })
      )
    );
  }
  createPost(post: Post) {
    return this.postsCollection.add(post);
  }

  updatePost(postId: string, post: Partial<Post>) {
    return this.postsCollection.doc(postId).update(post);
  }

  uploadImage(file: File) {
    const filePath = `posts/${Date.now()}_${file.name}`;
    const ref = this.storage.ref(filePath);
    return this.storage.upload(filePath, file).then(() => ref.getDownloadURL());
  }
  // Método para generar un nuevo ID
  generateId(): string {
    return this.afs.createId();
  }

  // Método para agregar un comentario a una publicación
  addComment(postId: string, comment: Comment): Promise<void> {
    return this.afs
      .collection('posts')
      .doc(postId)
      .update({
        comments: firebase.firestore.FieldValue.arrayUnion(comment),
      });
  }

  // Método para responder a un comentario
  replyToComment(
    postId: string,
    commentId: string,
    reply: Comment
  ): Promise<void> {
    return this.afs.doc(`posts/${postId}`).update({
      [`comments.${commentId}.replies`]:
        firebase.firestore.FieldValue.arrayUnion(reply),
    });
  }

  getPostById(postId: string): Observable<Post | undefined> {
    return this.postsCollection.doc(postId).snapshotChanges().pipe(
      map((action) => {
        const data = action.payload.data() as Post | undefined;
        if (data) {
          const id = action.payload.id;
          const createdAt = data.createdAt
            ? (data.createdAt as any).toDate()
            : new Date();
          return { id, ...data, createdAt };
        }
        return undefined;
      })
    );
  }  
}
