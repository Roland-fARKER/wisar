import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostListComponent } from './views/post-list/post-list.component';
import { CreatePostComponent } from './views/create-post/create-post.component';
import { PostComponent } from './components/post/post.component';
import { DetailComponent } from './components/detail/detail.component';
const routes: Routes = [
    { path: '',redirectTo : 'post',  pathMatch: 'full' },
    { path: 'post', component : PostListComponent,
        children: [
            { path: '', component: PostComponent },
            { path: 'create', component : CreatePostComponent },
            { path: ':id', component:DetailComponent },
        ]
     },
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ],
})
export class ForumRoutingModule {}