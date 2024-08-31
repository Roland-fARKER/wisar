import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { UserListComponent } from './components/user-list/user-list.component';
import { ChatComponent } from './components/chat/chat.component';
import { ChatRoutingModule } from './chats.routing';
import { ChatListComponent } from './components/chat-list/chat-list.component';

@NgModule({
  declarations: [
    UserListComponent,
    ChatComponent,
    ChatListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ChatRoutingModule
  ]
})
export class ChatsModule { }
