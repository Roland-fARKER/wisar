import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chats.service';
import { UserService1 } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent implements OnInit {
  chats: any[] = [];
  currentUser: any;

  constructor(
    private chatService: ChatService,
    private userService: UserService1,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe(user => {
      this.currentUser = user;
      this.loadChats();
    });
  }

  loadChats(): void {
    this.chatService.getUserChats(this.currentUser.uid).subscribe(chats => {
      this.chats = chats.map((chat: any) => {
        const unreadMessages = Array.isArray(chat.messages) 
          ? chat.messages.filter(
              (message: any) => !message.isRead && message.senderId !== this.currentUser.uid
            )
          : [];
        chat.unreadCount = unreadMessages.length;
        return chat;
      });
    });

    console.log(this.chats)
  }

  openChat(chatId: string): void {
    this.chatService.markMessagesAsRead(chatId, this.currentUser.uid);
    this.router.navigate(['chat/chat', chatId]);
  }
}
