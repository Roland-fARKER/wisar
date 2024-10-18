import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePostComponent } from './views/create-post/create-post.component';
import { PostListComponent } from './views/post-list/post-list.component';
import { CommentsComponent } from './views/comments/comments.component';
import { SharedModule } from '../shared/shared.module';
import { ForumRoutingModule } from './forum.module.routing';
import { EcomerceModule } from '../ecomerce/ecomerce.module';
import { PostComponent } from './components/post/post.component';
import { DetailComponent } from './components/detail/detail.component';
@NgModule({
  declarations: [
    CreatePostComponent,
    PostListComponent,
    CommentsComponent,
    PostComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ForumRoutingModule,
    EcomerceModule
  ]
})
export class ForumModule { }
