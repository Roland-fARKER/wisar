import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService1 } from '../../services/user.service';
import { ChatService } from '../../services/chats.service';
import { User } from '../../../models/User.model';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'], // Corrección en el nombre de la propiedad
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  currentUser: any;

  constructor(
    private userService: UserService1,
    private chatService: ChatService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe((user) => {
      this.currentUser = user; // Guardamos el usuario actual
    });

    this.chatService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }

  startChat(otherUserId: string): void {
    this.chatService
      .getOrCreateChat(this.currentUser.uid, otherUserId)
      .subscribe((chatId) => {
        this.router.navigate(['chat/chat', chatId]);
      });
  }

  cerrarsesion(){
    this.authService.logout();
  }
}
