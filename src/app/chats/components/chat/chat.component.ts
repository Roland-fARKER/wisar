import { Component, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatService } from '../../services/chats.service';
import { User } from '../../../models/User.model';
import { UserService1 } from '../../services/user.service';
import { Message } from '../../models/message.entitie';
import { Timestamp } from 'firebase/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent {
  chatId!: string;
  messages: Message[] = [];
  newMessageText: string = '';
  currentUser: User | null = null;
  
  constructor(
    private route: ActivatedRoute,
    private chatService: ChatService,
    private userService: UserService1,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe((user) => {
      this.currentUser = user;
      console.log(this.currentUser);
    });

    this.route.paramMap.subscribe((params) => {
      this.chatId = params.get('id')!;
      this.loadMessages();
    });
  }

  // Cargar mensajes del chat
  loadMessages(): void {
    this.chatService.getMessages(this.chatId).subscribe((messages) => {
      this.messages = messages;
    });
  }
  
  // Enviar mensaje
  sendMessage(): void {
    if (this.newMessageText.trim() && this.currentUser) {
      const newMessage: Message = {
        text: this.newMessageText,
        senderId: this.currentUser.uid,
        timestamp: Timestamp.now(),
        chatId: this.chatId,
      };
      this.chatService.sendMessage(this.chatId, newMessage).then(() => {
        this.newMessageText = '';
      });
    }
  }

  atras() {
    this.router.navigate(['chat/users']);
  }
}
