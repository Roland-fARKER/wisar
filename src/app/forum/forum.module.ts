import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePostComponent } from './views/create-post/create-post.component';
import { PostListComponent } from './views/post-list/post-list.component';
import { CommentsComponent } from './views/comments/comments.component';
import { SharedModule } from '../shared/shared.module';
import { ForumRoutingModule } from './forum.module.routing';

@NgModule({
  declarations: [
    CreatePostComponent,
    PostListComponent,
    CommentsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ForumRoutingModule
  ]
})
export class ForumModule { }
