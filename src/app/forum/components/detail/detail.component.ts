import { Post } from './../../models/Post.model';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ForumService } from '../../services/forum.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css',
})
export class DetailComponent {
  Post? : Post;
  postId?: string;

  constructor( private forumService: ForumService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Capturar el id del post desde la URL
    this.postId = this.route.snapshot.paramMap.get('id')!;
    
    this.forumService.getPostById(this.postId).subscribe((post) => {
      if (post) {
        this.Post = post;
      } else {
        console.log('Post no encontrado');
      }
    });
  }
}
