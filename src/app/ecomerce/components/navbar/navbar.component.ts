import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../models/User.model';
import { UserService1 } from '../../../chats/services/user.service';
import { AuthService } from '../../../auth/services/auth.service';
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
  cart: any[] = [];
  animateCart: boolean = false;
  eventListener: any;
  badgeValue: number = 0;
  CurrentUser?: User | null;

  constructor(
    private router: Router,
    private userService: UserService1,
    private _auth: AuthService
  ) {}

  ngOnInit() {
    this.loadCart();
    // Escuchar el evento global 'cart-updated'
    this.eventListener = (event: CustomEvent) => {
      this.loadCart();
      this.triggerAnimation();
    };
    window.addEventListener('cart-updated', this.eventListener);

    this.userService.getCurrentUser().subscribe((user) => {
      this.CurrentUser = user;
      console.log(user);
    });
  }

  logout() {
    this._auth.logout();
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  navs: MenuIt[] = [
    { label: 'Inicio', icon: 'fa-house', route: '/ecomerce' },
    { label: 'Comunidad', icon: 'fa-users', route: '/forum' },
    { label: 'Perfil', icon: 'fa-user', route: '/ecomerce/profile' },
    { label: 'Productos', icon: 'fa-box', route: '/ecomerce' },
  ];

  redirect(rute: string) {
    this.router.navigateByUrl(rute);
  }

  loadCart() {
    this.cart = JSON.parse(localStorage.getItem('cart') ?? '[]');
    this.badgeValue = this.cart.length;
  }

  triggerAnimation() {
    this.animateCart = true;
    setTimeout(() => {
      this.animateCart = false;
    }, 1000); // Dura 1 segundo la animación
  }

  get groupedCart() {
    const grouped = new Map<string, { item: any; quantity: number }>();

    this.cart.forEach((item) => {
      if (grouped.has(item.id)) {
        // Si el producto ya está en el mapa, incrementa su cantidad
        grouped.get(item.id)!.quantity++;
      } else {
        // Si no, agrega el producto al mapa con cantidad 1
        grouped.set(item.id, { item, quantity: 1 });
      }
    });

    return Array.from(grouped.values());
  }

  removeItem(itemId: string) {
    console.log('Eliminando producto con ID:', itemId); // Para depuración
    this.cart = this.cart.filter((item) => item.id !== itemId);
    localStorage.setItem('cart', JSON.stringify(this.cart));
    this.badgeValue = this.cart.length;
  }

  get total() {
    return this.groupedCart.reduce((sum, groupedItem) => {
      return sum + groupedItem.item.price * groupedItem.quantity;
    }, 0);
  }
}
