import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./chats/chats.module').then(m => m.ChatsModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'ecomerce',
    loadChildren: () => import('./ecomerce/ecomerce.module').then(m => m.EcomerceModule),
  },
  {
    path: 'forum',
    loadChildren: () => import('./forum/forum.module').then(m => m.ForumModule)
  },
  {
    path: '',
    redirectTo: 'ecomerce',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
