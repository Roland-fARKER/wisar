import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ForumService } from '../../services/forum.service';
import { Post } from '../../models/Post.model';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.css',
})
export class CreatePostComponent {
  postForm: FormGroup;

  constructor(private fb: FormBuilder, private forumService: ForumService) {
    this.postForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      imageUrl: [''],
    });
  }

  onSubmit() {
    if (this.postForm.valid) {
      const post: Post = {
        title: this.postForm.value.title,
        content: this.postForm.value.content.split('\n'), // Separar por líneas para hacer párrafos
        imageUrl: this.postForm.value.imageUrl,
        authorId: 'userId', // Obtener el ID del usuario autenticado
        authorName: 'username', // Obtener el nombre del usuario autenticado
        createdAt: new Date(),
        comments: [], // Inicializar los comentarios como un array vacío
      };

      this.forumService
        .createPost(post)
        .then(() => {
          console.log('Post created successfully!');
          this.postForm.reset(); // Reiniciar el formulario
        })
        .catch((error) => {
          console.error('Error creating post: ', error);
        });
    }
  }
}
