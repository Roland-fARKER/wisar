import { Component, Input } from '@angular/core';
import { Post } from '../../models/Post.model';
import { Observable } from 'rxjs';
import { ForumService } from '../../services/forum.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
})
export class PostComponent {
  @Input() posts!: Post[];
  posts$?: Observable<Post[]>;

  constructor(private forumService: ForumService, private router: Router) {}

  ngOnInit(): void {
    // Llamamos al servicio para obtener los posts y asignarlos al observable
    this.posts$ = this.forumService.getPosts();
    console.log(this.posts$);
  }

  getInitials(firstName: string, lastName: string): string {
    const firstInitial = firstName ? firstName.charAt(0).toUpperCase() : '';
    const lastInitial = lastName ? lastName.charAt(0).toUpperCase() : '';
    return `${firstInitial}${lastInitial}`;
  }

  // Método para manejar la navegación al detalle del post
  navigateToPost(postId: string): void {
    this.router.navigate(['forum/post', postId]);
  }
}
