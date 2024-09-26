import { User } from './../../../models/User.model';
import { Component, OnInit } from '@angular/core';
import { UserService1 } from '../../../chats/services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  CurrentUser?: User | null;

  menuOptions : any[] = [
    {
      label: 'Mi perfil',
      icon: 'fa-user',
      routerLink: 'ecomerce/profile/personal-info'
    },
    {
      label: 'Mi tienda',
      icon: 'fa-shop',
      routerLink: 'ecomerce/profile/my-shop'
    },
    {
      label: 'Mis Producto',
      icon: 'fa-box',
      routerLink: 'ecomerce/profile/my-products'
    },
    {
      label: 'Mis cupones',
      icon: 'fa-ticket',
      routerLink: 'ecomerce/profile/my-coupons'
    },
    {
      label: 'Prefrencias',
      icon: 'fa-gear',
      routerLink: 'ecomerce/profile/my-coupons'
    }
  ]
  constructor(
    private userService: UserService1,
    private router: Router
  ){}

  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe(user => {
      this.CurrentUser = user;
    });
  }

  redirigir( rute: string ){
    this.router.navigate([rute]);
  }
}
