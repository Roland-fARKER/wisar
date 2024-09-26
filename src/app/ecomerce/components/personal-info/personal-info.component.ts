import { Component } from '@angular/core';
import { UserService1 } from '../../../chats/services/user.service';
import { Router } from '@angular/router';
import { User } from '../../../models/User.model';
@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.css'
})
export class PersonalInfoComponent {
  CurrentUser?: User | null;
  constructor(
    private userService: UserService1,
    private router: Router
  ){}

  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe(user => {
      this.CurrentUser = user;
    });
  }

}
