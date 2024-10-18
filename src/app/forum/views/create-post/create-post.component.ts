import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ForumService } from '../../services/forum.service';
import { Post } from '../../models/Post.model';
import { UserService1 } from '../../../chats/services/user.service';
import { User } from '../../../models/User.model';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.css',
})
export class CreatePostComponent implements OnInit {
  postForm: FormGroup;
  currentuser: User | null = null;

  constructor(
    private fb: FormBuilder,
    private forumService: ForumService,
    private _userService: UserService1
  ) {
    this.postForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      imageUrl: [''],
    });
  }

  ngOnInit(): void {
    this._userService.getCurrentUser().subscribe((user) => {
      this.currentuser = user;
      console.log(this.currentuser);
    });
  }

  onSubmit() {
    if (this.postForm.valid) {
      const post: Post = {
        title: this.postForm.value.title,
        content: this.postForm.value.content.split('\n'),
        imageUrl: this.postForm.value.imageUrl,
        createdAt: new Date(),
        comments: [],
        author: this.currentuser ? this.currentuser : null,
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
