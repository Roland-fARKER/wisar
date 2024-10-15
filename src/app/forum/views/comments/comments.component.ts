import { Component, Input } from '@angular/core';
import { Post } from '../../models/Post.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ForumService } from '../../services/forum.service';
import { Comment } from '../../models/Comment.model';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent {
  @Input() post!: Post;
  commentForm: FormGroup;
  replyForm: FormGroup;

  constructor(private fb: FormBuilder, private forumService: ForumService) {
    this.commentForm = this.fb.group({
      commentContent: [''],
    });
    this.replyForm = this.fb.group({
      replyContent: [''],
    });
  }

  ngOnInit() {
    // Convertir createdAt a Date si es un Timestamp
    if (this.post.createdAt instanceof firebase.firestore.Timestamp) {
      this.post.createdAt = this.post.createdAt.toDate(); // Convertir a Date
    }
  }

  onComment() {
    if (!this.post.id) {
      console.error('Post ID is undefined');
      return; // Salir si el ID no está disponible
    }

    const comment: Comment = {
      id: this.forumService.generateId(),
      postId: this.post.id,
      content: this.commentForm.value.commentContent,
      authorId: 'userId', // Aquí deberías obtener el ID del usuario autenticado
      authorName: 'username', // Aquí deberías obtener el nombre del usuario autenticado
      createdAt: new Date(), // Usar la fecha actual
      replies: [],
    };

    this.forumService
      .addComment(this.post.id, comment)
      .then(() => {
        this.commentForm.reset(); // Limpiar el formulario después de agregar el comentario
        console.log('Comentario agregado con éxito');
      })
      .catch((error) => {
        console.error('Error al agregar el comentario:', error);
      });
  }

  onReply(commentId: string) {
    if (!this.post.id) {
      console.error('Post ID is undefined');
      return; // Salir si el ID no está disponible
    }

    const reply: Comment = {
      id: this.forumService.generateId(),
      postId: this.post.id,
      content: this.replyForm.value.replyContent,
      authorId: 'userId', // Aquí deberías obtener el ID del usuario autenticado
      authorName: 'username', // Aquí deberías obtener el nombre del usuario autenticado
      createdAt: new Date(), // Usar la fecha actual
      replies: [],
    };

    this.forumService
      .replyToComment(this.post.id, commentId, reply)
      .then(() => {
        this.replyForm.reset(); // Limpiar el formulario después de agregar la respuesta
        console.log('Respuesta agregada con éxito');
      })
      .catch((error) => {
        console.error('Error al agregar la respuesta:', error);
      });
  }
}
