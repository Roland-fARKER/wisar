import { Component, Input } from '@angular/core';
import { Post } from '../../models/Post.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ForumService } from '../../services/forum.service';
import { Comment } from '../../models/Comment.model';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { User } from '../../../models/User.model';
import { UserService1 } from '../../../chats/services/user.service';
import { MessageService } from 'primeng/api';  // Importar el servicio de mensajes

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
  providers: [MessageService], // Proveedor del servicio
})
export class CommentsComponent {
  @Input() post!: Post;
  commentForm: FormGroup;
  replyForm: FormGroup;
  responderFlags: { [commentId: string]: boolean } = {};
  currentuser: User | null = null;

  constructor(
    private fb: FormBuilder,
    private forumService: ForumService,
    private _userService: UserService1,
    private messageService: MessageService  // Inyectar el servicio
  ) {
    this.commentForm = this.fb.group({
      commentContent: [''],
    });
    this.replyForm = this.fb.group({
      replyContent: [''],
    });
  }

  ngOnInit() {
    // Convertir la fecha del post
    if (this.post.createdAt instanceof firebase.firestore.Timestamp) {
      this.post.createdAt = this.post.createdAt.toDate();
    }

    // Convertir las fechas de los comentarios y sus respuestas
    this.post.comments = this.convertTimestamps(this.post.comments);

    this._userService.getCurrentUser().subscribe((user) => {
      this.currentuser = user;
      console.log(this.currentuser);
    });
  }

  onComment() {
    if (!this.post.id) {
      console.error('Post ID is undefined');
      return;
    }

    const comment: Comment = {
      id: this.forumService.generateId(),
      postId: this.post.id,
      content: this.commentForm.value.commentContent,
      authorId: this.currentuser ? this.currentuser?.uid : '000',
      authorName: this.currentuser ? this.currentuser?.firstName : '000',
      createdAt: new Date(),
      replies: [],
    };

    this.forumService
      .addComment(this.post.id, comment)
      .then(() => {
        this.commentForm.reset(); // Limpiar el formulario
        this.messageService.add({
          severity: 'success',
          summary: 'Éxito',
          detail: 'Comentario agregado con éxito', // Mostrar mensaje de éxito
        });
      })
      .catch((error) => {
        console.error('Error al agregar el comentario:', error);
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Error al agregar el comentario', // Mostrar mensaje de error
        });
      });
  }

  onReply(commentId: string) {
    if (!this.post.id) {
      console.error('Post ID is undefined');
      return;
    }

    const reply: Comment = {
      id: this.forumService.generateId(),
      postId: this.post.id,
      content: this.replyForm.value.replyContent,
      authorId: this.currentuser ? this.currentuser?.uid : '000',
      authorName: this.currentuser ? this.currentuser?.firstName : '000',
      createdAt: new Date(),
      replies: [],
    };

    this.forumService
      .replyToComment(this.post.id, commentId, reply)
      .then(() => {
        this.replyForm.reset(); // Limpiar el formulario
        this.messageService.add({
          severity: 'success',
          summary: 'Éxito',
          detail: 'Respuesta agregada con éxito', // Mostrar mensaje de éxito
        });
      })
      .catch((error) => {
        console.error('Error al agregar la respuesta:', error);
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Error al agregar la respuesta', // Mostrar mensaje de error
        });
      });
  }

  toggleResponder(commentId: string) {
    this.responderFlags[commentId] = !this.responderFlags[commentId];
  }

  private convertTimestamps(comments: Comment[]): Comment[] {
    return comments.map((comment) => {
      if (comment.createdAt instanceof firebase.firestore.Timestamp) {
        comment.createdAt = comment.createdAt.toDate();
      }
      comment.replies = this.convertTimestamps(comment.replies);
      return comment;
    });
  }
}
