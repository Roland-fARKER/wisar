import { Component } from '@angular/core';
import { ForumService } from '../../services/forum.service';
import { Post } from '../../models/Post.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css',
})
export class PostListComponent {
  posts$?: Observable<Post[]>;

  constructor(private forumService: ForumService) {}

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
  
}
