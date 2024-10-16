import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostListComponent } from './views/post-list/post-list.component';
import { CreatePostComponent } from './views/create-post/create-post.component';

const routes: Routes = [
    { path: '',redirectTo : 'post',  pathMatch: 'full' },
    { path: 'post', component : PostListComponent,
        children: [
            { path: 'create', component : CreatePostComponent }     
        ]
     },
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ],
})
export class ForumRoutingModule {}