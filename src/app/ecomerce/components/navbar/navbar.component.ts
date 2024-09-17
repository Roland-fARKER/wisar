import { Component } from '@angular/core';
import { Router } from '@angular/router';
interface MenuIt {
  label: string;
  icon: string;
  route: string;
}
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  menuOpen = false;

  constructor(private router: Router) {}

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  navs: MenuIt[] = [
    { label: 'Inicio', icon: 'fa-house', route: '/eco', },
    { label: 'Comunidad', icon: 'fa-users', route: '/ecomerce', },
    { label: 'Perfil', icon: 'fa-user', route: '/ecomerce', },
    { label: 'Contacto', icon: 'fa-phone', route: '/ecomerce', },
  ];

  redirect(rute: string) {
    this.router.navigateByUrl(rute);
  }
}
